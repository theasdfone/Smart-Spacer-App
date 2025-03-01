import { View, StyleSheet, ScrollView } from "react-native";

import IndexHeader from '@/components/IndexComponents/indexheader';
import IndexNotification from '@/components/IndexComponents/indexnotifications';
import IndexTreatmentPlan from '@/components/IndexComponents/indextreatmentplan';
import IndexContacts from '@/components/IndexComponents/indexcontact';
import IndexGame from "@/components/IndexComponents/indexgame";
import IndexSpacer from "@/components/IndexComponents/indexspacer";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
 return (
    <SafeAreaView style={style.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={style.components}>
          <IndexHeader/>
        </View>
        <View style={style.components}>
          <IndexNotification />
        </View>
        <View style={style.components}>
          <IndexGame />
        </View>
        <View style={style.components}>
          <IndexSpacer />
        </View>
        <View style={style.components}>
          <IndexTreatmentPlan />
        </View>
        <View style={style.components}>
          <IndexContacts />
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
        paddingHorizontal: 20,
    },

    components: {
      marginTop: 40
    },

    end: {
      marginTop: 15
    }
});