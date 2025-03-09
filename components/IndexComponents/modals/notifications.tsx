import { View, StyleSheet, Text, Pressable, ScrollView, Image, Modal } from "react-native";
import { Notif } from "../../models/notification";

type Props = {
  notifications: Notif[],
}

export default function Notifications({notifications} : Props) {
 return (
    <View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {
          notifications.map((notif) => {
            return(
              <View key={notif.NotifId} style= {style.notification}>
                <View style={style.iconBackground}>
                  <Image 
                    style={style.bellIcon}
                    source={require('../../../assets/images/bell-regular.png')}
                  />
                </View>
                <View>
                  <View style={style.title}>
                    <Text>{notif.Title}</Text>
                    <Text>{notif.Time}</Text>
                  </View>
                  <Text style={style.description} numberOfLines={1}>{notif.Description}</Text>
                </View>
              </View>
            )
          })
        }
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  notification: {
    backgroundColor: "#E1E1E1",
    flexGrow: 1,
    paddingVertical: 5,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
  },
  
  bellIcon: {
    height: 18,
    width: 18,
  },

  iconBackground: {
    height: 30,
    width: 30,
    borderRadius: 40,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  },

  title: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  description: {
    width: 250,
    paddingTop: 5
  },  
});