import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

const GameHeader = ({ navigation }) => {
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Closet')}>
          <Text style={styles.buttonText}>Closet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Journal')}>
          <Text style={styles.buttonText}>Journal</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Food')}>
          <Text style={styles.buttonText}>Food</Text>
        </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  characterImage: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  button: {
    padding: 15,
    backgroundColor: '#6200ee',
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default GameHeader;