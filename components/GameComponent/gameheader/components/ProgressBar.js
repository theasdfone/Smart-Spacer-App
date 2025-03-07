// components/ProgressBar.js
import React from "react";
import { View, StyleSheet } from "react-native";

export const ProgressBar = ({
  progress,
  backgroundColor,
  fillColor,
  height,
  borderRadius,
  style,
}) => {
  return (
    <View
      style={[
        styles.progressBarContainer,
        { backgroundColor, height, borderRadius },
        style,
      ]}
    >
      <View
        style={[
          styles.progressBar,
          { width: `${progress}%`, backgroundColor: fillColor },
        ]}
      />
    </View>
  );
};

ProgressBar.defaultProps = {
  height: 20,
  borderRadius: 10,
  backgroundColor: "#444",
  fillColor: "#61dafb",
};

const styles = StyleSheet.create({
  progressBarContainer: {
    width: "100%",
    height: 20,
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
  },
  progressBar: {
    height: "100%",
  }, // Default props
});

export default ProgressBar;
