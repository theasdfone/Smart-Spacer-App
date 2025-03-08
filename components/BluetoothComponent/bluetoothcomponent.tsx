import { BLEService } from "@/services/bluetooth/bluetooth";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import type { StateType } from '../objects/statetype'
import { Device } from "react-native-ble-plx";

type DeviceExtendedByUpdateTime = Device & { updateTimestamp: number }

const MIN_TIME_BEFORE_UPDATE_IN_MILLISECONDS = 5000

export default function BluetoothComponent() {
    const [isConnecting, setIsConnecting] = useState(false)
    const [foundDevices, setFoundDevices] = useState<DeviceExtendedByUpdateTime[]>([])
    const [connectedDevice, setConnectedDevice] = useState<Device | null>(null)

    const addFoundDevice = (device: Device) =>
        setFoundDevices(prevState => {
          if (!isFoundDeviceUpdateNecessary(prevState, device)) {
            return prevState
          }
          // deep clone
          const nextState = JSON.parse(JSON.stringify(prevState))
          const extendedDevice: DeviceExtendedByUpdateTime = {
            ...device,
            updateTimestamp: Date.now() + MIN_TIME_BEFORE_UPDATE_IN_MILLISECONDS
          } as DeviceExtendedByUpdateTime
    
          const indexToReplace = nextState.findIndex((currentDevice:Device) => currentDevice.id === device.id)
          if (indexToReplace === -1) {
            return nextState.concat(extendedDevice)
          }
          nextState[indexToReplace] = extendedDevice
          return nextState
        })

        const isFoundDeviceUpdateNecessary = (currentDevices: DeviceExtendedByUpdateTime[], updatedDevice: Device) => {
            const currentDevice = currentDevices.find(({ id }) => updatedDevice.id === id)
            if (!currentDevice) {
              return true
            }
            return currentDevice.updateTimestamp < Date.now()
          }
         
          const onConnectSuccess = () => {
            setIsConnecting(false)
          }
        
          const onConnectFail = () => {
            setIsConnecting(false)
          }

      const deviceRender = (device: Device) => (
        <TouchableOpacity
            style={style.container}
          onPress={() => {
            setIsConnecting(true)
            BLEService.connectToDevice(device.id).then(() =>{
                onConnectSuccess
                setConnectedDevice(BLEService.getDevice)
            }).catch(onConnectFail)
          }}
          key={device.id}
        >
            <Text>{device.id}</Text>
            <Text>{device.name}</Text>
        </TouchableOpacity>
      )
      
  return (
    <View>
        <View>
          <Text>Connected Devices:</Text>
        </View>
        <Text>{JSON.stringify(connectedDevice, null, 4)}</Text>
        <View style={{marginBottom: 50}}>
            <TouchableOpacity
                style={style.main}
                onPress={() => {
                    setFoundDevices([])
                    BLEService.initializeBLE().then(() => BLEService.scanDevices(addFoundDevice, null, true))
                }}
            >
                <Text>Discover Device</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={style.main}
                onPress={() => {
                    BLEService.disconnectDevice().then(() => {
                        setConnectedDevice(BLEService.getDevice)
                    })
                }}
            >
                <Text>Disconnect Device</Text>
            </TouchableOpacity>
        </View>


        <FlatList
            style={{ flex: 1 }}
            data={foundDevices}
            renderItem={({ item }) => {
                if(item.name == "Smart Spacer") {
                    return deviceRender(item);
                }

                return <View></View>
            }}
            keyExtractor={device => device.id}
        />
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