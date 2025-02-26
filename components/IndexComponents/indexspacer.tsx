import { Text, View, StyleSheet, Image } from "react-native";
import { useState } from "react";

import { placeholder } from "@/placeholder/placeholder";
import { User } from "./objects/user";
import { Spacer } from "./objects/spacer";

import 'react-battery-gauge';

export default function IndexSpacer() {
 const [user, setUser] = useState<User>(placeholder.user);
 const [spacer, setSpacer] = useState<Spacer>(placeholder.spacer);

  let charge = spacer.Percentage * 100;

 return (
      <View style={style.main}>
        <View style={style.spacerMain}>
          <View style={style.titleContainer}>
            <Text style={style.title}>{user.Username}'s Spacer</Text>
            {/* Is this the serial number for the inhaler or the spacer? */}
            <Text>{spacer.SerialNum}</Text>
          </View>
          <View style={style.imageContainer}>
            <Text style={style.spacerDetails}>Full Charge</Text>
            <Text style={style.spacerDetails}>{charge}%</Text>
          </View>
          <View style={style.imageContainer}>
            <Image
              style={style.icons}
              source={require('../../assets/images/bluetooth.png')}
            />
            <Text style={style.spacerDetails}>Bluetooth</Text>
            <Text style={style.spacerDetails}>{spacer.Paired ? "Paired" : "Not Connected"}</Text>
          </View>
        </View>
        <Image
          source={require('../../assets/images/Spacer.png')}
        />
      </View>
  );
}

const style = StyleSheet.create({
  main: {
    backgroundColor: "#E1E1E1",
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 10
  },

  spacerMain: {
    paddingLeft: 20,
    paddingRight: 100
  },

  titleContainer: {
  },

  title: {
    paddingLeft: 15,
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
    paddingLeft: 5
  }
});