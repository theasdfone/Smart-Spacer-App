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
    <View>
      <View style={style.shadows}>
        <View style={style.container}>
          <View style={style.navbarContainer}>
            <View style={style.welcome}>
              <View style={style.navbar}>
                <Text style={style.header}>Welcome {child?.parent_id}!</Text>
                <Profile />
              </View>

              <Text>{child?.name}'s next appointment with {provider?.name} is March 20th at 2:00 P.M.</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  shadows: {
    overflow: "hidden",
    paddingBottom: 5,
  },

  container: {
    backgroundColor: '#fff',
    elevation: 5,
  },

  navbarContainer: {
    flexDirection: 'row',
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 10,
    height: 100
  },

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