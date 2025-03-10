// components/InteractiveImage.js
import React from "react";
import { TouchableOpacity, Image } from "react-native";

const InteractiveImage = ({ image, imageSize, onPressIn }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPressIn={onPressIn}>
      <Image
        source={image}
        style={[{ width: imageSize.width, height: imageSize.height }]}
        resizeMode="contain"
        onLayout={(event) => {
          onPressIn({ nativeEvent: { locationY: imageSize.height / 2 } }); // Example, adjust as needed
        }}
      />
    </TouchableOpacity>
  );
};

export default InteractiveImage;
