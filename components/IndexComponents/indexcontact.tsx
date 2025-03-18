import { Text, View, StyleSheet, Image } from "react-native";
import { useEffect, useState } from "react";

import Profile from '../util/profilepicture';
import { HealthcareProvider } from "../models/provider";

import * as SecureStore from 'expo-secure-store';
import { providerServices } from "@/services/providerservices";

export default function IndexContacts() {
  const [provider, setProvider] = useState<HealthcareProvider>();

  useEffect(() => {
    const child = SecureStore.getItem("child");

    const fetchProviderData = async (provider_id: string) => {
      try {
        const result = await providerServices.getProviderById(provider_id);
        setProvider(result);
      } catch (err) {
        console.log(err)
      }
    };

    if (child) {
      let provider_id = JSON.parse(child).provider_id;
      fetchProviderData(provider_id)
    } else {
      throw console.error("Child not found");
    }
  }, []);

  return (
    <View style={style.main}>
      <View style={style.contactMain}>
        <View style={style.titleContainer}>
          <Profile />
          <Text style={style.title}>{provider?.name}</Text>
        </View>
        <View style={style.imageContainer}>
          <Image
            style={style.icons}
            source={require('../../assets/images/email.png')}
          />
          <Text style={style.contactInfo}>{provider?.email}</Text>
        </View>
        <View style={style.imageContainer}>
          <Image
            style={style.icons}
            source={require('../../assets/images/phone.png')}
          />
          <Text style={style.contactInfo}>{provider?.regular_phone}</Text>
        </View>
      </View>
      <View style={style.emergencyMain}>
        <Text>Emergency</Text>
        <Text>{provider?.emergency_phone}</Text>
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