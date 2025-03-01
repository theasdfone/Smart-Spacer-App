import GraphCalendar from "@/components/GraphComponents/graphcalendar";
import GraphHeader from "@/components/GraphComponents/graphheader";
import GraphPeakFlow from "@/components/GraphComponents/graphpeakflow";
import GraphSchedule from "@/components/GraphComponents/graphschedule";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GraphScreen() {
 return (
    <SafeAreaView style={style.main}>
      <View style={style.header}>
        <GraphHeader />
      </View>
      <View style={style.calendar}>
        <GraphCalendar />
      </View>
      <View style={style.components}>
        <GraphSchedule />
      </View>
      <View style={style.components}>
        <GraphPeakFlow />
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

    calendar: {
      marginTop: 20,
      paddingHorizontal: 20
    },

    components: {
      marginTop: 40,
      paddingHorizontal: 20
    },
    
    end: {
      marginTop: 15
    }
});