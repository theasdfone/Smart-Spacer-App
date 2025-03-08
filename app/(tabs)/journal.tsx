import JournalCalendar from "@/components/JournalComponents/journalcalendar";
import JournalDailyLog from "@/components/JournalComponents/journaldailylog";
import JournalFacts from "@/components/JournalComponents/journalfact";
import JournalInsights from "@/components/JournalComponents/journalinsights";
import moment from "moment";
import { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function JournalScreen() {
  const [selectedDate, setSelectedDate] = useState<string>(moment().format("dddd, MMMM Do YYYY").toString());

 return (
    <SafeAreaView style={style.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={style.calendar}>
          <JournalCalendar
            setSelectedDate={setSelectedDate}
          />
        </View>
        <View style={style.components}>
          <JournalDailyLog 
            selectedDate={selectedDate}
          />
        </View>
        <View style={style.components}>
          <JournalInsights />
        </View>
        <View style={style.components}>
          <JournalFacts />
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

  calendar: {
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