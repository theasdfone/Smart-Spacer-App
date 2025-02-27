import { placeholder } from "@/placeholder/placeholder";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Image } from 'expo-image';
import ProgressCircle from 'react-native-progress/Circle';

type Props = {
    selectedDate: string
}

export default function JournalDailyLog({selectedDate} : Props) {

 return (
    <View style={style.container}>
        <Text style={style.header}>{selectedDate}</Text>

        <View style={style.mainContainer}>
          <View style={style.circleContainer}>
              <ProgressCircle 
                progress={0.5}
                color={"#119DA4"}
                size={100}
                showsText={true}
                thickness={5}
                unfilledColor={"darkgray"}
              />
          </View>
          <View>
              <Text style={style.dailyLogText}>You're {50}% there!</Text>
              <Text>Complete {placeholder.user.Username}'s daily log</Text>
              <TouchableOpacity
                style={style.continueButton}
              >
                <View style={style.textContainer}>
                  <Text style={style.buttonText}>Continue</Text>
                  <Image style={style.continueArrow} source={require('@/assets/images/continue-arrow.png')} />
                </View>
              </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    container: {
    },
    
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10
    },

    mainContainer: {
      backgroundColor: "#E9E9E9",
      paddingTop: 20,
      paddingBottom: 20,
      borderRadius: 10,
      paddingLeft: 10,
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      gap: 30
    },

    circleContainer: {
        marginLeft: 20
    },

    dailyLogText: {
        fontWeight:"bold",
        fontSize: 20
    },

    continueButton: {
        backgroundColor: "#119DA4",
        height: 35,
        width: 135,
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 10
    },

    textContainer: {
        flexDirection: "row",
        marginLeft: 20
    },

    continueArrow: {
        height: 25,
        width: 25,
        borderRadius: 40,
    },
  
    buttonText: {
      color: "#F4F4F4",
      fontSize: 16,
      marginRight: 15,
      fontWeight: "bold"
    },
});