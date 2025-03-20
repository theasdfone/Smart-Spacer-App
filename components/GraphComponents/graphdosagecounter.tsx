import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import ProgressCircle from 'react-native-progress/Circle';
import { SpacerMedication } from "../models/spacermedications";
import { spacerServices } from "@/services/spacerservices";
import * as SecureStore from 'expo-secure-store';

export default function GraphDosageCounter() {
    const [spacerMedications, setSpacerMedications] = useState<SpacerMedication[]>([]);

    useEffect(() => {
        const child = SecureStore.getItem("child");
        const fetchSpacersData = async (child_id: string) => {
            try {
                const result = await spacerServices.getSpacerMedicationByChildId(child_id);
                setSpacerMedications(result);
            } catch (err) {
                console.log(err)
            }
        };

        if (child) {
            fetchSpacersData(JSON.parse(child).id);
        } else {
            throw console.error("Child not found");
        }
    }, []);

    return (
        <View>
            <View style={style.container}>
                <Text style={style.header}>Dosage Counter</Text>
                <Text>Important! Only counts doses taken with the spacer.</Text>
                <Text>Doses without it won't be tracked!</Text>
            </View>
            <View style={style.doseContainers}>
                {
                    spacerMedications?.map((spacerMedication) =>

                        <View style={spacerMedication.colour == "blue" ? style.rescueContainer : style.maintainerContainer}>
                            <View style={style.progressCircleTextContainer}>
                                <ProgressCircle
                                    progress={spacerMedication.doses_left / 100}
                                    color={"#2B1700"}
                                    size={150}
                                    thickness={12}
                                    unfilledColor={"#979797"}
                                    strokeCap={"round"}
                                />
                                <View style={style.moveContainerInsideCircle}>
                                    <View style={style.doseTextContainer}>
                                        <Text style={style.doseHeader}>{spacerMedication.commercial_name}</Text>
                                        <Text>~{spacerMedication.doses_left} Puffs</Text>
                                        <Text>Left</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                }
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
        position: "absolute",
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
        fontWeight: "bold",
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
        alignItems: "center",
    },

    doseHeader: {
        fontSize: 16,
        fontWeight: "bold"
    },
});