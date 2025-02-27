import { Text, View, StyleSheet, Image } from "react-native";

export default function JournalInsights() {
 return (
      <View style={style.main}>
        <View style={style.streakMain}>
            <View style={style.titleContainer}>
              <Image 
                  style={style.fireIcons}
                  source={require('../../assets/images/fire.png')}
              />
              <Text style={style.title}>{} Days</Text>
            </View>
            <Text style={style.description}>You are on a {}-day journaling streak! Keep it up!</Text>
        </View>
        <View style={style.infoMain}>
            <View style={style.titleContainer}>
                <Text style={style.title}>Last Week</Text>
                <Image 
                    style={style.calendarIcon}
                    source={require('../../assets/images/calendar.png')}
                />
            </View>
            <Text style={style.description}>You are on a {}-day journaling streak! Keep it up!</Text>
        </View>
      </View>
  );
}

const style = StyleSheet.create({
  main: {
    flexDirection: "row"
  },

  streakMain: {
    backgroundColor: "#E9E9E9",
    height: 150,
    paddingTop: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    width: "50%",
    marginRight: "3%"
  },

  infoMain: {
    backgroundColor: "#E9E9E9",
    height: 150,
    paddingTop: 20,
    borderRadius: 10,
    paddingHorizontal: 20,
    width: "50%"
  },

  fireIcons: {
    height: 30,
    width: 30,
  },

  calendarIcon: {
    height: 20,
    width: 20,
    marginLeft: 10
  },

  titleContainer: {
    flexDirection:"row",
    alignItems:"center"
  },

  title: {
    paddingLeft: 5,
    fontSize: 20,
    fontWeight: "bold"
  },

  description: {
    fontSize: 16,
    paddingLeft: 5
  }
});