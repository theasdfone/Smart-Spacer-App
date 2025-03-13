import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { BleManager, Device } from "react-native-ble-plx";
import { requestBluetoothPermission } from "./useAndroidPermissions";
import { BluetoothCommands } from "./bluetoothcommands";
import BluetoothWrapper from "./bluetoothwrapper";

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
    const [inhalationData, setInhalationData] = useState(''); // Store expiratory data
    const [batteryData, setBatteryData] = useState(''); // Store battery data
    const [isReceiving, setIsReceiving] = useState(false); // Tracks if we are currently receiving data

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

        const sub = device.monitorCharacteristicForService(SERVICE_UUID, RX_UUID, (error, char) => {
            if (error) {
                console.log('Error while monitoring characteristic:', error);
                return;
            }

            if (char?.value) {
                // Decode the received chunk (base64 to UTF-8 string)
                const value = Buffer.from(char.value, 'base64').toString('utf-8');

                console.log('Received chunk:', value);  // Debugging log

                // If the chunk contains the START keyword, we start receiving data
                if (value.includes("#")) {
                    setIsReceiving(true);
                    currentBuffer = ``;  // Clear any previous data
                    currentBuffer += value;

                    console.log('Start receiving data'); // Debugging log
                }

                // If we are receiving data, concatenate the chunk
                if (isReceiving) {
                    currentBuffer += value;

                    if (value.includes("@")) {
                        let bufferString = currentBuffer.match(/#.*@/);

                        // Check if the chunk contains the INHALATION keyword, which indicates this json is for inhalation data
                        if (bufferString?.includes(BluetoothCommands.INHALATION)) {
                            // Regex tries to find and retrieve the json (aka everything between the brackets: {})
                            const inhalationData = currentBuffer.match(/{.*}/);
                            setInhalationData(inhalationData ? inhalationData[0].toString() : ""); // Set the complete message once the END keyword is detected

                            console.log('End of message detected:', inhalationData ? inhalationData[0].toString() : ""); // Debugging log

                            // Reset buffer and receiving state
                            currentBuffer = ``;
                            setIsReceiving(false);
                        }

                        // Check if the chunk contains the BATTERY keyword, which indicates this json is for battery data
                        if (bufferString?.includes(BluetoothCommands.BATTERY)) {
                            // Regex tries to find and retrieve the json (aka everything between the brackets: {})
                            const batteryData = currentBuffer.match(/{.*}/);
                            setBatteryData(batteryData ? batteryData[0].toString() : "");

                            console.log('End of battery data:', batteryData ? batteryData[0].toString() : ""); // Debugging log

                            // Reset buffer and receiving state
                            currentBuffer = ``;
                            setIsReceiving(false);
                        }
                    }
                }
            }
        });

        return () => sub.remove();
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
                charge={parseInt(batteryData)}
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