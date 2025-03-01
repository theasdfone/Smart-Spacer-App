import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function GraphTabMenu() {
  const [selectedOption, setSelectedOption] = useState('W');

  const handleOptionPress = (option : string) => {
    setSelectedOption(option);

    //To do: API for the option selected
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedOption === 'W' ? styles.selected : null,
        ]}
        onPress={() => handleOptionPress('W')}
      >
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'W' ? styles.selectedText : null,

            ]}
          >
            W
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedOption === 'M' ? styles.selected : null,
        ]}
        onPress={() => handleOptionPress('M')}
      >
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'M' ? styles.selectedText : null,

            ]}
          >
            M
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedOption === '6M' ? styles.selected : null,
        ]}
        onPress={() => handleOptionPress('6M')}
      >
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === '6M' ? styles.selectedText : null,

            ]}
          >
            6M
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.button,
          selectedOption === 'Y' ? styles.selected : null,
        ]}
        onPress={() => handleOptionPress('Y')}
      >
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'Y' ? styles.selectedText : null,

            ]}
          >
            Y
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 30,
    backgroundColor: '#E9E9E9',
    flexDirection: 'row',
    alignItems: 'center',
  },

  button: {
    flex: 1
  },

  selected: {
    backgroundColor: '#119DA4',
    borderRadius: 30,
  },

  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: 30,
  },

  buttonText: {
    color: 'black',
  },

  selectedText: {
    color: 'white'
  },
});