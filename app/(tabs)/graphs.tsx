import GraphCalendar from "@/components/GraphComponents/graphcalendar";
import GraphHeader from "@/components/GraphComponents/graphheader";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GraphScreen() {
  

 return (
    <SafeAreaView style={style.main}>
      <View style={style.header}>
        <GraphHeader />
      </View>
      <View style={style.components}>
        <GraphCalendar />
      </View>
      <View style={style.end}></View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
    },

    header: {
      marginTop: 40,
    },

    components: {
      marginTop: 20,
      paddingHorizontal: 20
    },
    
    end: {
      marginTop: 15
    }
});