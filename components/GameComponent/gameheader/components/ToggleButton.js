// components/ToggleButton.js
import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

const ToggleButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Image
        source={require("../buttons/ToDo.png")} // Use the same image for both states
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  image: {
    width: 80, // Adjust size as needed
    height: 80,
  },
});

export default ToggleButton;
