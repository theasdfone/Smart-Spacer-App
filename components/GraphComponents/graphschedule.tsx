import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Child } from "../models/child";
import * as SecureStore from 'expo-secure-store';


export default function GraphSchedule() {
    const [child, setChild] = useState<Child>();

    useEffect(() => {
        const child = SecureStore.getItem("child");

        if(child) {
            setChild(JSON.parse(child));
        } else {
            throw console.error("Child not found");
        }
    }, []);

    return (
        <View style={style.main}>
            <View style={style.container}>
                <Text style={style.header}>Puff Schedule</Text>
                <Text>In the past 7 days {child?.Username} has taken their medication:</Text>
            </View>
            <View style={style.infoWrapper}>
                <View style={style.onTimeDose}>
                    <Text style={style.infoTextTitle}>4/7</Text>
                    <Text style={style.infoText}>On Time</Text>
                </View>
                <View style={style.missedDose}>
                    <Text style={style.infoTextTitle}>1/7</Text>
                    <Text style={style.infoText}>Missed</Text>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    main: {
        flexDirection: "row",
        gap: 20
    },

    container: {
        width: "50%",
        marginTop: 20
    },

    header: {
        fontSize: 24,
        fontWeight: "bold"
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
    }
});