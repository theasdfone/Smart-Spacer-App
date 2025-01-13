import { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import Profile from '../util/profilepicture';
import { HealthcareProvider } from './objects/provider';
import { User } from './objects/user';
import { placeholder } from '@/placeholder/placeholder';

export default function IndexHeader() {
    const [provider, setProvider] = useState<HealthcareProvider>(placeholder.provider);
    const [user, setUser] = useState<User>(placeholder.user);

    const [image, setImage] = useState<string | undefined>(undefined);
    const defaultImg = require('@/assets/images/icon.png');

    const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

 return (
      <View style={style.welcome}>
        <View style={style.imgheader}>
          <Text style={style.header}>Welcome {user.Username}!</Text>
          <Pressable style={style.profile} onPress={pickImage}>
              <Profile imgSource={defaultImg} selectedImage={image} />
          </Pressable>
        </View>

        <Text>Your next appointment with {provider.Name} is MM/DD/YYYY at HH:MM</Text>
      </View>
  );
}

const style = StyleSheet.create({
    welcome: {
      flex: 1,
    },

    imgheader: {
      flexDirection: 'row',
      paddingBottom: 10,
      alignItems: "center"
    },
  
    profile: {
      height: 40,
      width: 40,
      borderRadius: 40,
    },

    header: {
      fontSize: 40,
      width: 340
    },
});