import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function graphScreen() {

 return (
    <View style={style.main}>
      <Text>Graphs</Text>
    </View>
  );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },

    button: {
      fontSize: 20,
      textDecorationLine: "underline",
      color: "#fff"
    }
});