import ResourceContainer from "@/components/ResourceComponents/resourcecontainer";
import ResourceHeader from "@/components/ResourceComponents/resourceheader";
import { Link } from "expo-router";
import { Text, View, StyleSheet, ScrollView } from "react-native";

export default function resourceScreen() {

 return (
    <View style={style.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={style.components}>
          <ResourceHeader/>
        </View>
        <View style={style.components}>
          <ResourceContainer/>
        </View>
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
});