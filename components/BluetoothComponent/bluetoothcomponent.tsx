import React, { useEffect, useState } from "react";
import { Button, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BleManager, Device } from "react-native-ble-plx";
import { useAndroidPermissions } from "./useAndroidPermissions";

const bleManager = new BleManager();
global.Buffer = require('buffer').Buffer;

const DEVICE_NAME = "Smart Spacer";
const SERVICE_UUID = "6E400001-B5A3-F393-E0A9-E50E24DCCA9E";
const RX_UUID = "6E400003-B5A3-F393-E0A9-E50E24DCCA9E";

export default function BluetoothComponent() {
    const [connectionStatus, setConnectionStatus] = useState("Searching...");
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [device, setDevice] = useState<Device | null>(null);
    const [stepCount, setStepCount] = useState("");
    const [hasPermissions, setHasPermissions] = useState<boolean>(Platform.OS == 'ios');
    const [waitingPerm, grantedPerm] = useAndroidPermissions();

    useEffect(() => {
        if (!(Platform.OS == 'ios')) {
            setHasPermissions(grantedPerm);
        }
    }, [grantedPerm])

    useEffect(() => {
        if (hasPermissions) {
            searchAndConnectToDevice();
        }
    }, [hasPermissions]);

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
                console.log("Disconnected device");
                if (device) {
                    setConnectionStatus("Reconnecting...");
                    connectToDevice(device)
                        .then(() => {
                            setConnectionStatus("Connected");
                            setIsConnected(true);
                        })
                        .catch((error) => {
                            console.log("Reconnection failed: ", error);
                            setConnectionStatus("Reconnection failed");
                            setIsConnected(false);
                            setDevice(null);
                        });
                }
            }
        );

        return () => subscription.remove();
    }, [device]);

    useEffect(() => {
        if (!device || !device.isConnected) {
            return;
        }

        const sub = device.monitorCharacteristicForService(SERVICE_UUID, RX_UUID, (error, char) => {
            if (error) {
                console.error("Error while monitoring characteristic:", error);
            }

            if (char?.value) {
                const value = Buffer.from(char.value, 'base64').toString('utf-8');
                setStepCount(value);
                console.log('Value: ', value);  // Debugging log
            }
        });

        return () => sub.remove()
    }, [device]);

    const searchAndConnectToDevice = () =>
        bleManager.startDeviceScan(null, null, (error, device) => {
            if (error) {
                console.error(error);
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

    const connectToDevice = async (device: Device) => {
        try {
            const _device = await device.connect();
            // require to make all services and Characteristics accessable
            await _device.discoverAllServicesAndCharacteristics();
            setConnectionStatus("Connected");
            setIsConnected(true);
            setDevice(_device);
        } catch (error) {
            setConnectionStatus("Error in Connection");
            setIsConnected(false);
        }
    };

    return (
        <View style={style.main}>
            <View>
                <Text>The connection status is: {connectionStatus}</Text>
                <Text>{device?.name}</Text>
                <Button
                    disabled={!isConnected}
                    onPress={() => { }}
                    title={`The button is ${isConnected ? "enabled" : "disabled"}`}
                />
                <Text>{stepCount}</Text>
            </View>
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