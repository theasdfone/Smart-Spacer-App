import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginPage from "./loginpage";

export default function Main() {
 return (
    <View style={style.main}>
      <LoginPage />
    </View>
  );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
    }
});