import { View, StyleSheet, ScrollView } from "react-native";

import IndexHeader from '@/components/IndexComponents/indexheader';
import IndexNotification from '@/components/IndexComponents/indexnotifications';
import IndexTreatmentPlan from '@/components/IndexComponents/indextreatmentplan';
import IndexContacts from '@/components/IndexComponents/indexcontact';
import { useNavigation } from "expo-router";

export default function Index() {
  const navigation = useNavigation();

 return (
    <View style={style.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={style.components}>
          <IndexHeader/>
        </View>
        <View style={style.components}>
          <IndexNotification
            navigation = {navigation}
          />
        </View>
        <View style={style.components}>
          <IndexTreatmentPlan />
        </View>
        <View style={style.components}>
          <IndexContacts />
        </View>
        <View style={style.end}></View>
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 20,
    },

    components: {
      marginTop: 50
    },

    end: {
      marginTop: 5
    }
});