import React from "react";
import { Image } from "react-native";

const Bunny = () => {
  return (
    <Image
      source={require('../src/assets/images/bunny.png')} // Make sure to have a bunny image
      style={{
        width: 150,
        height: 200,
        position: "absolute",
      }}
    />
  );
};

export default Bunny;
