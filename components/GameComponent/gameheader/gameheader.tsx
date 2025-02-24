import React, { useState } from 'react';
import { View, Pressable, StyleSheet, ImageBackground, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window'); // Get screen dimensions

const GameHeader = ({ navigation }) => {
     const [activeButton, setActiveButton] = useState(null);

  return (
    <ImageBackground source={require('./src/assets/HomeReference.png')} style={styles.container}>
      {/* Centered Bunny */}
      <View style={styles.characterContainer}>
        <Image
          source={require('./src/assets/bunny_plain_og.png')}
          style={styles.characterImage}
          resizeMode="contain"
        />
      </View>

      {/* Buttons at the bottom */}
      <View style={styles.buttonContainer}>
        {/* Closet Button */}
        <Pressable
          onPressIn={() => {
            setActiveButton('closet');
            navigation.navigate('Closet');
          }}
        >
          <Image
            source={
              activeButton === 'closet'
                ? require('./src/assets/buttons/ClothesPressed.png')
                : require('./src/assets/buttons/Clothes.png')
            }
            style={styles.buttonImage}
            resizeMode="contain"
          />
        </Pressable>

        {/* Journal Button */}
        <Pressable
          onPressIn={() => {
            setActiveButton('journal');
            navigation.navigate('Journal');
          }}
        >
          <Image
            source={
              activeButton === 'journal'
                ? require('./src/assets/buttons/JournalPressed.png')
                : require('./src/assets/buttons/Journal.png')
            }
            style={styles.buttonImage}
            resizeMode="contain"
          />
        </Pressable>
        {/* Food Button */}
        <Pressable
          onPressIn={() => {
            setActiveButton('food');
            navigation.navigate('Food');
          }}
        >
          <Image
            source={
              activeButton === 'food'
                ? require('./src/assets/buttons/FoodPressed.png')
                : require('./src/assets/buttons/Food.png')
            }
            style={styles.buttonImage}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 10,
  },
  characterImage: {
    width: 275,
    height: 425,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0)',
  },
  button: {
    padding: 15,
    backgroundColor: '#6200ee',
    borderRadius: 10,
  },
  buttonImage: {
      width: 80, // Adjust the width of the buttons
      height: 80, // Adjust the height of the buttons
  },
});

export default GameHeader;