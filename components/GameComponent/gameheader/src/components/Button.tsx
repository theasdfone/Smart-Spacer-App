import React, { useState, useEffect } from 'react';
import { Pressable, Image, StyleSheet } from 'react-native';

const Button = ({ onPress, defaultImage, activeImage }) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => {
        setIsPressed(true);
        onPress();
      }}
      onPressOut={() => setIsPressed(false)}
    >
      <Image
        source={isPressed ? activeImage : defaultImage}
        style={styles.buttonImage}
        resizeMode="contain"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonImage: {
    width: 80,
    height: 80,
  },
});

export default Button;