// components/ColorButtons.js
import React from "react";
import { TouchableOpacity, Text, View, StyleSheet, Image } from "react-native";

const ColorButtons = ({ images, onPress }) => {
  return (
    <View style={styles.colorButtonsContainer}>
      {images.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => onPress(image.name)}>
          <Image source={image.src} style={styles.buttonImage} />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  colorButtonsContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent:"space-between",
    paddingHorizontal: 40,
  },
  buttonImage: {
    maxWidth: "90%", // Adjust size as needed
    resizeMode: "contain",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
  },
});

export default ColorButtons;
