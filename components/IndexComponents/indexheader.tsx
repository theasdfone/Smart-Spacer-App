import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from "react-native";

import Profile from '../util/profilepicture';
import { HealthcareProvider } from '../models/provider';
import { Child } from '../models/child';

import * as SecureStore from 'expo-secure-store';
import { providerServices } from '@/services/providerservices';

export default function IndexHeader() {
  const [provider, setProvider] = useState<HealthcareProvider>();
  const [child, setChild] = useState<Child>();

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
      let childObj = JSON.parse(child);
      setChild(childObj);
      
      let provider_id = childObj.provider_id;
      fetchProviderData(provider_id);
    } else {
      throw console.error("Child not found");
    }
  }, []);
  
  return (
    <View style={style.welcome}>
      <View style={style.navbar}>
        <Text style={style.header}>Welcome {child?.parent_id}!</Text>
        <Profile />
      </View>

      <Text>Your next appointment with {provider?.name} is MM/DD/YYYY at HH:MM</Text>
    </View>
  );
}

const style = StyleSheet.create({
  welcome: {
    flex: 1,
  },

  navbar: {
    flexDirection: 'row',
    paddingBottom: 10,
    alignItems: "center"
  },

  header: {
    fontSize: 40,
    width: "85%"
  },
});