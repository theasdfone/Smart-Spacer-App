import GraphCalendar from "@/components/GraphComponents/graphcalendar";
import GraphDosageCounter from "@/components/GraphComponents/graphdosagecounter";
import GraphHeader from "@/components/GraphComponents/graphheader";
import GraphPeakFlow from "@/components/GraphComponents/graphpeakflow";
import GraphSchedule from "@/components/GraphComponents/graphschedule";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GraphScreen() {
 return (
    <SafeAreaView style={style.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
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
        <View style={style.components}>
          <GraphDosageCounter />
        </View>
        <View style={style.end}></View>
      </ScrollView>
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
      marginTop: 30,
      paddingHorizontal: 20
    },
    
    end: {
      marginTop: 15
    }
});