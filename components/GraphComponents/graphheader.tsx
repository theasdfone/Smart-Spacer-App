import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";

import * as ImagePicker from 'expo-image-picker';
import Profile from "../util/profilepicture";

export default function GraphHeader() {
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
       <View style={style.shadows}>
           <View style={style.container}>
               <View style={style.navbar}>
                   <Text style={style.calendarHeader}>Graph & Data</Text>
                   <Pressable style={style.profile} onPress={pickImage}>
                       <Profile imgSource={defaultImg} selectedImage={image} />
                   </Pressable>
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

    navbar: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 20,
        height: 75
    },

    calendarHeader: {
        fontSize: 40,
        width: "85%",
    },

    profile: {
        height: 40,
        width: 40,
        borderRadius: 40,
    },
});