import { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  setStart: React.Dispatch<React.SetStateAction<any>>,
  setEnd: React.Dispatch<React.SetStateAction<any>>
}

export default function GraphTabMenu({ setStart, setEnd }: Props) {
  const [selectedOption, setSelectedOption] = useState('T');

  const calculateDates = (option: string) => {
    const endDate = new Date();
    const startDate = new Date();

    switch (option) {
      case 'T': // 1 Year
        endDate.setDate(startDate.getDate() + 1);
        break;
      case 'W': // 1 Week
        startDate.setDate(endDate.getDate() - 7);
        break;
      case 'M': // 1 Month
        startDate.setMonth(endDate.getMonth() - 1);
        break;
      case '6M': // 6 Months
        startDate.setMonth(endDate.getMonth() - 6);
        break;
      default:
        startDate.setDate(endDate.getDate() - 7);
    }

    // Return ISO strings with timezone offset
    return {
      start: startDate.toISOString(),
      end: endDate.toISOString()
    };
  };

  const handleOptionPress = (option: string) => {
    setSelectedOption(option);
    const dates = calculateDates(option);
    setStart(dates.start);
    setEnd(dates.end);
  };


  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          selectedOption === 'T' ? styles.selected : null,
        ]}
        onPress={() => handleOptionPress('T')}
      >
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.buttonText,
              selectedOption === 'T' ? styles.selectedText : null,

            ]}
          >
            T
          </Text>
        </View>
      </TouchableOpacity>
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