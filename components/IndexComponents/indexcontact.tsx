import { Text, View, StyleSheet, Image } from "react-native";
import { useState } from "react";

import Profile from '../util/profilepicture';
import { HealthcareProvider } from "../models/provider";
import { placeholder } from "@/placeholder/placeholder";

export default function IndexContacts() {
  const [provider, setProvider] = useState<HealthcareProvider>(placeholder.provider);


  return (
    <View style={style.main}>
      <View style={style.contactMain}>
        <View style={style.titleContainer}>
          <Profile />
          <Text style={style.title}>{provider.Name}</Text>
        </View>
        <View style={style.imageContainer}>
          <Image
            style={style.icons}
            source={require('../../assets/images/email.png')}
          />
          <Text style={style.contactInfo}>{provider.Email}</Text>
        </View>
        <View style={style.imageContainer}>
          <Image
            style={style.icons}
            source={require('../../assets/images/phone.png')}
          />
          <Text style={style.contactInfo}>{provider.RegularPhone}</Text>
        </View>
      </View>
      <View style={style.emergencyMain}>
        <Text>Emergency</Text>
        <Text>{provider.EmergencyNumber}</Text>
        <Text>911</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  main: {
    flexDirection: "row"
  },

  contactMain: {
    backgroundColor: "#E9E9E9",
    height: 150,
    paddingTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    width: "67%",
    marginRight: "3%"
  },

  emergencyMain: {
    backgroundColor: "#E9E9E9",
    height: 150,
    paddingTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    width: "30%"
  },

  titleContainer: {
    flexDirection: "row",
    alignItems: "center"
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

  contactInfo: {
    paddingLeft: 5
  }
});