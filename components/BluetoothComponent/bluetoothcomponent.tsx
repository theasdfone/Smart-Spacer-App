import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BleManager, Device } from "react-native-ble-plx";

const bleManager = new BleManager();

const DEVICE_NAME = "Smart Spacer";
const SERVICE_UUID = "ab49b033-1163-48db-931c-9c2a3002ee1d";
const STEPCOUNT_CHARACTERISTIC_UUID = "fbb6411e-26a7-44fb-b7a3-a343e2b011fe";

export default function BluetoothComponent() {
    const [connectionStatus, setConnectionStatus] = useState("Searching...");
    const [isConnected, setIsConnected] = useState<boolean>(false);
    const [device, setDevice] = useState<Device | null>(null);
    const [stepCount, setStepCount] = useState(-1);

    useEffect(() => {
        searchAndConnectToDevice();
    }, []);

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
            return
        }

        const sub = device.monitorCharacteristicForService(
            SERVICE_UUID,
            STEPCOUNT_CHARACTERISTIC_UUID,
            (error, char) => {
                if (error || !char) {
                    return;
                }

                const rawValue = parseInt(atob(char?.value ?? ""));
                setStepCount(rawValue);
            }
        )
        return () => sub.remove()
    }, [device])


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
        <View>
            <View style={{ marginBottom: 50 }}>
                <View>
                    <Text>The connection status is: {connectionStatus}</Text>
                    <Text>{device?.name}</Text>
                    <Button
                        disabled={!isConnected}
                        onPress={() => { }}
                        title={`The button is ${isConnected ? "enabled" : "disabled"}`}
                    />
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    main: {
        backgroundColor: "lightblue",
        marginTop: 20,
        height: 30,
        alignItems: "center",
        borderRadius: 30
    },

    container: {
        marginVertical: 10,
        backgroundColor: "lightgreen"
    },
});