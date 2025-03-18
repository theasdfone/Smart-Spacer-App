import { Text, View, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";

import { Child } from "@/components/models/child";
import * as SecureStore from 'expo-secure-store';

type Props = {
  charge: string,
  serialNumber: string | undefined,
  status: string
}

export default function BluetoothWrapper({ charge, serialNumber, status }: Props) {
  const [child, setChild] = useState<Child>();

  useEffect(() => {
    const child = SecureStore.getItem("child");

    if (child) {
      setChild(JSON.parse(child));
    } else {
      throw console.error("Child not found");
    }
  }, []);

  return (
    <View style={style.main}>
      <View style={style.spacerMain}>
        <View style={style.titleContainer}>
          <Text style={style.title}>{child?.name}'s Spacer</Text>
          {/* Is this the serial number for the inhaler or the spacer? */}
          <Text>{serialNumber}</Text>
        </View>
        <View style={style.imageContainer}>
          <Image
            source={require('../../../assets/images/Battery.png')}
          />
          <View>
            <Text style={style.spacerDetails}>Battery Remaining:</Text>
            <Text style={style.spacerDetails}>{charge}</Text>
          </View>
        </View>
        <View style={style.imageContainer}>
          <Image
            source={require('../../../assets/images/bluetooth.png')}
          />
          <View>
            <Text style={style.spacerDetails}>Bluetooth</Text>
            <Text style={style.spacerDetails}>{status}</Text>
          </View>
        </View>
        <View style={style.imageContainer}>
          <Image
            source={require('../../../assets/images/sync.png')}
          />
          <View>
            <Text style={style.spacerDetails}>Data Last Updated:</Text>
            <Text style={style.spacerDetails}>Now</Text>
          </View>
        </View>
      </View>
      <Image
        source={require('../../../assets/images/Spacer.png')}
      />
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    backgroundColor: "#E9E9E9",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 10
  },

  spacerMain: {
    paddingLeft: 20,
    paddingRight: 100
  },

  titleContainer: {
    paddingLeft: 5
  },

  title: {
    fontSize: 25,
    fontWeight: "bold"
  },

  imageContainer: {
    paddingTop: 20,
    paddingLeft: 7,
    flexDirection: "row",
    alignItems: "center"
  },

  icons: {
    height: 20,
    width: 20,
  },

  spacerDetails: {
    paddingLeft: 10
  }
});