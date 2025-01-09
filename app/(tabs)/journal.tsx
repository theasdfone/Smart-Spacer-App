import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function journalScreen() {

 return (
    <View style={style.main}>
      <Text>Journal</Text>
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