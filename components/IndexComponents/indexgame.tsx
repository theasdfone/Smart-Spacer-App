import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Child } from '../models/child';
import { Image } from 'expo-image';
import GameHeader from '../GameComponents/gameheader';
import * as SecureStore from 'expo-secure-store';

export default function IndexGame() {
  const [child, setChild] = useState<Child>();
  const defaultImg = require('@/assets/images/dog.png');
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const child = SecureStore.getItem("child");

    if (child) {
      setChild(JSON.parse(child));
    } else {
      throw console.error("Child not found");
    }
  }, []);

  return (
    <View style={style.mainContainer}>
      <TouchableOpacity
        style={style.gameButton}
        onPress={() => setModalVisible(true)}
      >
        <View style={style.contentContainer}>
          <Image style={style.profile} source={defaultImg} />
          <Text style={style.text}>Go to {child?.name}'s Pet</Text>
        </View>
      </TouchableOpacity>
      <GameHeader
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
    height: 50,
    width: 175,
    borderRadius: 40,
    justifyContent: "center"
  },

  text: {
    color: "white",
    marginLeft: 10
  },
});