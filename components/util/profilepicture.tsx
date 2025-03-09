import { Pressable, StyleSheet } from 'react-native';
import { Image } from "expo-image";
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

export default function Profile() {
  const [image, setImage] = useState<string | undefined>(undefined);

  const defaultImg = require('@/assets/images/icon.png');
  const imageSource = image ? { uri: image } : defaultImg;

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
    <Pressable style={styles.profile} onPress={pickImage}>
      <Image source={imageSource} style={styles.image} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  profile: {
    height: 40,
    width: 40,
    borderRadius: 40,
  },

  image: {
    width: 45,
    height: 45,
    borderRadius: 40,
  },
});
