import BluetoothComponent from "@/components/BluetoothComponent/bluetoothcomponent";
import CarouselComponent from "@/components/util/carousel/carousel";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  // You'll need at least 4 items in the array here
  const data = [
    require("../../assets/images/adaptive-icon.png"),
    require("../../assets/images/asthma-inhaler.png"),
    require("../../assets/images/Battery.png"),
    require("../../assets/images/fire.png"),
    require("../../assets/images/phone.png"),
    require("../../assets/images/dog.png"),
    require("../../assets/images/edit.png"),
    require("../../assets/images/email.png"),

    //You can fill in blank data like this:
    null
  ]

 return (
    <SafeAreaView style={style.main}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={style.components}>
            <CarouselComponent 
              count={data.length}
              data={data}
            />
        </View>
        <View style={style.components}>
            <BluetoothComponent />
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