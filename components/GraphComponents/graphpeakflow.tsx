import { useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import GraphTabMenu from "./graphtabmenu";
import { LineChart } from "react-native-gifted-charts";


export default function GraphPeakFlow() {
    const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]

    return (
       <View>
            <Text style={style.header}>Peak Expiratory Flow</Text>
            <View style={style.tabComponent}>
                <GraphTabMenu />
            </View>
            <View style={style.chartComponent}>
                <LineChart 
                    data = {data}
                    width={350}
                    spacing={100}
                />
            </View>
       </View>
    );
}

const style = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: "bold",
    },

    tabComponent: {
        marginTop: 10
    },

    chartComponent: {
        marginTop: 15
    }
});