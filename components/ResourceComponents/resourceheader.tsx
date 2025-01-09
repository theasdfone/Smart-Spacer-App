import { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from "react-native";
import * as ImagePicker from 'expo-image-picker';

import Profile from '../util/profilepicture';

export default function ResourceHeader() {
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
          <Text style={style.header}>Resources</Text>
          <Pressable style={style.profile} onPress={pickImage}>
              <Profile imgSource={defaultImg} selectedImage={image} />
          </Pressable>
        </View>
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