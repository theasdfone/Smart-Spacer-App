import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function JournalFacts() {
 return (
    <View style={style.main}>
        <View style={style.container}>
            <View style={style.componentContainer}>
                <Text style={style.title}>Did you know?</Text>
                <Text style={style.description}>Fun fact about asthma and allergies and better management</Text>
                <TouchableOpacity
                  style={style.readMoreButton}
                >
                  <View style={style.textContainer}>
                    <Text style={style.buttonText}>Read More</Text>
                    <Image style={style.continueArrow} source={require('@/assets/images/continue-arrow.png')} />
                  </View>
                </TouchableOpacity>
            </View>
            <Image 
                style={style.lightBulbIcon}
                source={require('../../assets/images/lightbulb.png')}
            />
        </View>
    </View>
  );
}

const style = StyleSheet.create({
    main: {
      backgroundColor: "#E9E9E9",
      height: "auto",
      paddingVertical: 20,
      borderRadius: 10,
      paddingHorizontal: 20,
      width: "100%"
    },

    container: {
      flexDirection:"row",
      alignItems:"center",
      gap: 50
    },

    componentContainer: {
        width: "50%"
    },

    title: {
      paddingLeft: 5,
      fontSize: 20,
      fontWeight: "bold"
    },

    description: {
      fontSize: 16,
      marginTop: 10,
      paddingLeft: 5
    },

    readMoreButton: {
        backgroundColor: "#119DA4",
        height: 35,
        width: 135,
        borderRadius: 10,
        justifyContent: "center",
        marginTop: 20
    },
    
    textContainer: {
        flexDirection: "row",
        marginLeft: 15
    },
    
    continueArrow: {
        height: 25,
        width: 25,
        borderRadius: 40,
    },

    buttonText: {
        color: "#F4F4F4",
        fontSize: 16,
        marginRight: 5,
        fontWeight: "bold"
    },

    lightBulbIcon: {
        height: 100,
        width: 100,
    },
});