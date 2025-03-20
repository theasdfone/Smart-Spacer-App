import GraphCalendar from "@/components/GraphComponents/graphcalendar";
import GraphDosageCounter from "@/components/GraphComponents/graphdosagecounter";
import GraphHeader from "@/components/GraphComponents/graphheader";
import GraphPeakFlow from "@/components/GraphComponents/graphpeakflow";
import GraphSchedule from "@/components/GraphComponents/graphschedule";
import { SpacerUse } from "@/components/models/spaceruse";
import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function GraphScreen() {
  const [spacerUse, setSpacerUse] = useState<SpacerUse[]>([]);

  const counts = spacerUse ? spacerUse.reduce((acc, data) => {
    data.morning_technique === 2 || data.evening_technique === 2 ? acc.missed++ : acc.onTime++;
    return acc;
  }, { onTime: 0, missed: 0 }) : {onTime: 0, missed: 0};
  
  const { onTime, missed } = counts;
  
  return (
    <SafeAreaView style={style.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={style.header}>
          <GraphHeader />
        </View>
        <View style={style.calendar}>
          <GraphCalendar 
            spacerUse={spacerUse}
            setSpacerUse={setSpacerUse}
          />
        </View>
        <View style={style.components}>
          <GraphSchedule
            onTime={onTime}
            missed={missed}
          />
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