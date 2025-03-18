import { useEffect, useState } from 'react';
import { Text, View, StyleSheet } from "react-native";

import Profile from '../util/profilepicture';
import { HealthcareProvider } from '../models/provider';
import { Child } from '../models/child';

import * as SecureStore from 'expo-secure-store';
import { placeholder } from '@/placeholder/placeholder';

export default function IndexHeader() {
  const [provider, setProvider] = useState<HealthcareProvider>(placeholder.provider);
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
    <View style={style.welcome}>
      <View style={style.navbar}>
        <Text style={style.header}>Welcome {child?.parent_id}!</Text>
        <Profile />
      </View>

      <Text>Your next appointment with {provider.Name} is MM/DD/YYYY at HH:MM</Text>
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