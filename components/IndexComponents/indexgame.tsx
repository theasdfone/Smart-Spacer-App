import { useState } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { User } from '../objects/user';
import { placeholder } from '@/placeholder/placeholder';
import { Image } from 'expo-image';

export default function IndexGame() {
    const [user, setUser] = useState<User>(placeholder.user);
    const defaultImg = require('@/assets/images/dog.png');

 return (
    <View style={style.mainContainer}>
      <TouchableOpacity
        style={style.gameButton}
      >
        <View style={style.contentContainer}>
            <Image style={style.profile} source={defaultImg} />
            <Text style={style.text}>Go to {user.Username}'s Pet</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
    mainContainer: {
        alignItems: "center"
    },

    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 20
    },

    profile: {
      height: 25,
      width: 25,
      borderRadius: 40,
    },

    gameButton: {
        backgroundColor: "#119DA4",
        height: 35,
        width: 175,
        borderRadius: 40,
        justifyContent: "center"
      },
  
    text: {
      color: "white",
      marginLeft: 10
    },
});