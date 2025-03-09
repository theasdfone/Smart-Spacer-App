import { Image } from "expo-image";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Login() {
  return (
      <View style={style.container}>  
          <View style={style.mainContainer}>
            <View>
                <Text style={style.loginTitle}>Login</Text>
                <TouchableOpacity
                  style={style.continueButton}
                >
                  <View style={style.textContainer}>
                    <Text style={style.buttonText}>Continue</Text>
                    <Image style={style.addIcon} source={require('@/assets/images/add-icon.png')} />
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
  
      loginTitle: {
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
  
      addIcon: {
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
