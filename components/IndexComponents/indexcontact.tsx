import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

import Profile from '../util/profilepicture';
import { HealthcareProvider } from "./objects/provider";
import { placeholder } from "@/placeholder/placeholder";

export default function IndexContacts() {
  const [image, setImage] = useState<string | undefined>(undefined);
  const [provider, setProvider] = useState<HealthcareProvider>(placeholder.provider);

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
      <View style={style.main}>
        <View style={style.contactMain}>
          <View style={style.titleContainer}>
            <Pressable style={style.profile} onPress={pickImage}>
              <Profile imgSource={defaultImg} selectedImage={image} />
            </Pressable>
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
    backgroundColor: "#E1E1E1",
    height: 150,
    paddingTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    width: "67%",
    marginRight: "3%"
  },

  emergencyMain: {
    backgroundColor: "#E1E1E1",
    height: 150,
    paddingTop: 10,
    borderRadius: 10,
    paddingLeft: 10,
    width: "30%"
  },

  profile: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },

  titleContainer: {
    flexDirection:"row",
    alignItems:"center"
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