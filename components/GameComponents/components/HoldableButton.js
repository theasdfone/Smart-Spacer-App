import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  Animated,
} from "react-native";

const HoldableButton = ({ onHoldComplete, imageSource }) => {
  const [opacity] = useState(new Animated.Value(0.6)); // Initial opacity (50%)
  const holdTimeout = useRef(null);
  const handlePressIn = () => {
    // Animate opacity to 100% when pressed
    Animated.timing(opacity, {
      toValue: 1,
      duration: 500, // Adjust duration as needed
      useNativeDriver: true,
    }).start();

    // Set a timeout to trigger the pop-up after holding for a certain duration
    holdTimeout.current = setTimeout(() => {
      onHoldComplete?.(); // Callback for hold completion
    }, 1000); // Match the duration of the opacity animation
  };

  const handlePressOut = () => {
    // Reset opacity to 50% when released
    if (holdTimeout.current) {
      clearTimeout(holdTimeout.current);
    }

    // Reset opacity to 50% when released
    Animated.timing(opacity, {
      toValue: 0.5,
      duration: 300, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={1} // Disable default opacity change on press
      >
        <Animated.View style={[styles.button, { opacity }]}>
          <Image source={imageSource} style={styles.buttonImage} />
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#119DA4",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonImage: {
    width: 40, // Adjust width as needed
    height: 40, // Adjust height as needed
    resizeMode: "contain", // Ensure the image fits within the dimensions
    borderRadius: 20,
  },
});

export default HoldableButton;
