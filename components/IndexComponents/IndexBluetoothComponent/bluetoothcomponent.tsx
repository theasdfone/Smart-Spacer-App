import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { BleManager, Device } from "react-native-ble-plx";
import { requestBluetoothPermission } from "./useAndroidPermissions";
import { BluetoothCommands } from "./bluetoothcommands";
import BluetoothWrapper from "./bluetoothwrapper";
import { spacerUseInfoServices } from "@/services/spaceruseinfoservices";
import { Child } from "@/components/models/child";
import * as SecureStore from 'expo-secure-store';
import { sensorDetailServices } from "@/services/sensordataservices";

const bleManager = new BleManager();
global.Buffer = require('buffer').Buffer;

const DEVICE_NAME = "Smart Spacer";
const SERVICE_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E";
const RX_UUID = "6E400003-B5A3-F393-E0A9-E50E24DCCA9E";

export default function BluetoothComponent() {
    // Device Connection Variables
    const [connectionStatus, setConnectionStatus] = useState("Searching...");
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [device, setDevice] = useState<Device | null>(null);

    // Permission Variables
    const [hasPermissions, setHasPermissions] = useState<boolean>(false);
    const grantedPerm = requestBluetoothPermission();

    // Variables for Receiving Data from RX Buffer 
    const [inhalationData, setInhalationData] = useState(''); // Store inhalation data
    const [batteryData, setBatteryData] = useState(''); // Store battery data

    // Child
    const [child, setChild] = useState<Child>();

    useEffect(() => {
        const child = SecureStore.getItem("child");

        if (child) {
            setChild(JSON.parse(child));
        } else {
            throw console.error("Child not found");
        }
    }, []);

    // This checks to see if permissions are enabled and then attempts to connect or reconnect to the Smart Spacer device 
    useEffect(() => {
        if (hasPermissions) {
            const subscription = bleManager.onStateChange((state) => {  // check if device bluetooth is powered on, if not alert to enable it!
                if (state === 'PoweredOff') {
                    Alert.alert('"App" would like to use Bluetooth.', 'This app uses Bluetooth to connect to and share information with your .....', [
                        {
                            text: "Don't allow",
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                        },
                        { text: "Turn ON", onPress: () => { bleManager.enable(); setTimeout(searchAndConnectToDevice, 1000); } },
                    ]);

                    subscription.remove();
                } else if (state === "PoweredOn") {
                    setTimeout(searchAndConnectToDevice, 1000);
                }
            }, true);
        } else {
            const perms = async () => {
                setHasPermissions(await grantedPerm);
            }

            perms().catch((err) => console.log(err));
        }
    }, [grantedPerm, device]);

    // This attempts to monitor the characteristics of Smart Spacer to read from its RX buffer which is processed into our various pieces of data (inhalation, battery, exhalation, ect.)
    useEffect(() => {
        if (!device || !device.isConnected) {
            return;
        }

        let currentBuffer = ``; // Buffer to hold concatenated data
        let isReceiving = false;

        const sub = device.monitorCharacteristicForService(SERVICE_UUID, RX_UUID, (error, char) => {
            if (error) {
                console.log('Error while monitoring characteristic:', error);
                return;
            }

            if (char?.value) {
                // Decode the received chunk (base64 to UTF-8 string)
                const value = Buffer.from(char.value, 'base64').toString('utf-8');

                // If the chunk contains the #, we start receiving data
                if (value.includes("#")) {
                    isReceiving = true;
                    currentBuffer = ``;  // Clear any previous data
                    console.log("Start receiving")
                }

                // If we are receiving data, concatenate the chunk
                if (isReceiving) {
                    currentBuffer += value;

                    if (value.includes("@")) {
                        let bufferString = currentBuffer.replace(/\s+/g, '').match(/#(.*?)@/);
                        let result = bufferString ? bufferString[0] : "";

                        // Check if the chunk contains the INHALATION keyword, which indicates this json is for inhalation data
                        if (result.includes(BluetoothCommands.INHALATION)) {
                            // Regex tries to find and retrieve the json (aka everything between the brackets: {})
                            const inhalationData = result.match(/({.*})/);
                            let inhalation = inhalationData ? inhalationData[0].toString() : "{}";

                            // Fix JSON syntax errors in the input string
                            const fixedJson = inhalation
                                .replace(/"header:"/g, '"header":')  // Add missing colon
                                .replace(/,\s*]/g, ']');            // Remove trailing comma

                            // Parse the JSON
                            const data = JSON.parse(fixedJson);

                            // let medication = data.header;
                            // let medication = data.header.medicationType;
                            let inhalationDetails = data.details;

                            // Parse Medication and Update Dose Count
                            // let parsedMedication = medication.map((entry: any) => ({
                            //     spacer_id: entry.attempt,
                            //     time_stamp: entry.timestamp ?
                            //         // Fix date format and extract date part
                            //         entry.timestamp.slice(0, 10) : "",
                            //     trials: entry.trial,
                            //     type: 1
                            // }));

                            // Type 1 is for inhalation sensor data
                            let parsedInhalationDetails = inhalationDetails.map((entry: any) => ({
                                spacer_id: 1,
                                flow_rate: parseInt(entry.flowRate?.replace('L/min', '') || 0) || null,
                                percentage: parseInt(entry.percentage?.replace('%', '') || 0) || null,
                                zone: entry.zone,
                                time_stamp: entry.timestamp ?
                                    // Fix date format and extract date part
                                    entry.timestamp.slice(0, 10) : "",
                                trials: entry.trial,
                                type: 1
                            }));

                            // console.log(parsedMedication.toString());
                            console.log(parsedInhalationDetails.toString());

                            sensorDetailServices.createSensorDetail(parsedInhalationDetails);

                            // Reset buffer and receiving state
                            currentBuffer = ``;
                            isReceiving = false;
                        }

                        // Check if the chunk contains the BATTERY keyword, which indicates this json is for battery data
                        if (result.includes(BluetoothCommands.BATTERY)) {
                            // Regex tries to find and retrieve the json (aka everything between the brackets: {})
                            const batteryData = result.match(/({.*})/);
                            let battery = batteryData ? JSON.parse(batteryData[0]).batteryPercentage : "";

                            setBatteryData(battery);

                            // Reset buffer and receiving state
                            currentBuffer = ``;
                            isReceiving = false;
                        }

                        // Check if the chunk contains the EXHALATION keyword, which indicates this json is for inhalation data
                        if (result.includes(BluetoothCommands.EXHALATION)) {
                            // Regex tries to find and retrieve the json (aka everything between the brackets: {})
                            const exhalationData = result.match(/({.*})/);
                            let exhalation = exhalationData ? JSON.parse(exhalationData[0].toString()) : "{}";

                            // Type 2 is for exhalation sensor data
                            let parsedExhalation = exhalation.PEFRs.map((entry: any) => ({
                                spacer_id: entry.attempt,
                                flow_rate: parseInt(entry.flowRate?.replace('L/min', '')) || null,
                                percentage: parseInt(entry.percentage?.replace('%', '')) || null,
                                zone: "",  // Empty string as per requirements
                                time_stamp: entry.timestamp ?
                                    // Fix date format and extract date part
                                    entry.timestamp.slice(0, 10) : "",
                                trials: entry.trial,
                                type: 2
                            }));

                            // console.log(parsedExhalation);
                            sensorDetailServices.createSensorDetail(parsedExhalation);

                            // Reset buffer and receiving state
                            currentBuffer = ``;
                            isReceiving = false;
                        }
                    }
                }
            }
        });

        return () => {
            sub.remove();
            isReceiving = isReceiving;
        };
    }, [device]);

    // This function deals with device disconnection. We clear our connection status and our RX variables and set device to null
    useEffect(() => {
        if (!device) {
            return;
        }

        const subscription = bleManager.onDeviceDisconnected(
            device.id,
            (error, device) => {
                if (error) {
                    console.log("Disconnected with error:", error);
                }

                setConnectionStatus("Disconnected");
                setIsConnected(false);

                setBatteryData("");
                setInhalationData("");

                setDevice(null);
            }
        );

        return () => subscription.remove();
    }, [device]);

    const searchAndConnectToDevice = () => {
        if (!device) {
            bleManager.startDeviceScan(null, null, (error, device) => {
                if (error) {
                    setIsConnected(false);
                    setConnectionStatus("Error searching for devices");
                    return;
                }

                if (device?.name === DEVICE_NAME) {
                    bleManager.stopDeviceScan();
                    setConnectionStatus("Connecting...");
                    connectToDevice(device);
                }
            });
        }
    }

    const connectToDevice = async (device: Device) => {
        try {
            const _device = await device.connect().then((device) => {
                // require to make all services and Characteristics accessable
                return device.discoverAllServicesAndCharacteristics();
            });
            setConnectionStatus("Connected");
            setIsConnected(true);
            setDevice(_device);
        } catch (error) {
            setConnectionStatus("Error in Connection");
            setIsConnected(false);
        }
    };

    return (
        <View>
            <BluetoothWrapper
                charge={batteryData}
                serialNumber={device?.id}
                status={connectionStatus}
            />
        </View>
    );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});