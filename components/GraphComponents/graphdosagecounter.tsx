import { Text, View, StyleSheet } from "react-native";
import ProgressCircle from 'react-native-progress/Circle';

export default function GraphDosageCounter() {

    return (
       <View>
            <View style={style.container}>
                <Text style={style.header}>Dosage Counter</Text>
                <Text>Important! Only counts doses taken with the spacer.</Text>
                <Text>Doses without it won't be tracked!</Text>
            </View>
            <View style={style.doseContainers}>
                <View style={style.rescueContainer}>
                  <View style={style.progressCircleTextContainer}>
                      <ProgressCircle 
                        progress={0.5}
                        color={"#2B1700"}
                        size={150}
                        thickness={12}
                        unfilledColor={"#979797"}
                        strokeCap={"round"}
                      />
                      <View style={style.moveContainerInsideCircle}>
                        <View style={style.doseTextContainer}>
                            <Text style={style.doseHeader}>Ventolin</Text>
                            <Text>80-100 Puffs</Text>
                            <Text>Left</Text>
                        </View>
                      </View>
                  </View>
                </View>
                <View style={style.maintainerContainer}>
                  <View style={style.progressCircleTextContainer}>
                    <ProgressCircle 
                      progress={0.5}
                      color={"#2B1700"}
                      size={150}
                      thickness={12}
                      unfilledColor={"#979797"}
                      strokeCap={"round"}
                    />
                    <View style={style.moveContainerInsideCircle}>
                        <View style={style.doseTextContainer}>
                            <Text style={style.doseHeader}>Fluticasone</Text>
                            <Text>80-100 Puffs</Text>
                            <Text>Left</Text>
                        </View>
                    </View>
                  </View>
                </View>
            </View>
       </View>
    );
}

const style = StyleSheet.create({
    container: {
        marginTop: 20,
        marginBottom: 5
    },

    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 5
    },

    infoWrapper: {
        position: "relative"
    },

    onTimeDose: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "green",
        justifyContent: "center",
        alignItems: "center",
    },

    missedDose: {
        position:"absolute",
        marginLeft: 80,
        marginTop: 25,
        width: 80,
        height: 80,
        borderRadius: 100,
        backgroundColor: "red",
        justifyContent: "center",
        alignItems: "center"
    },

    infoTextTitle: {
        fontSize: 20,
        fontWeight:"bold",
        color: "white"
    },

    infoText: {
        color: "white"
    },

    doseContainers: {
        flexDirection: "row",
        gap: 20
    },

    progressCircleTextContainer: {
        position: "relative"
    },

    moveContainerInsideCircle: {
        position: "absolute",
        marginLeft: 35,
        marginTop: 40
    },

    rescueContainer: {
        backgroundColor: "#C5CEFF",
        padding: 20,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    },

    maintainerContainer: {
        backgroundColor: "#F5D7B0",
        padding: 20,
        borderRadius: 10,
        flexDirection: "row",
        alignItems: "center",
    },

    inhalerIcon: {
        height: 35,
        width: 35,
    },

    doseTextContainer: {
        alignItems:"center",
    },

    doseHeader: {
        fontSize: 16,
        fontWeight: "bold"
    },
});