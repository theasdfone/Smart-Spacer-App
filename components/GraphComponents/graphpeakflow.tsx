import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import GraphTabMenu from "./graphtabmenu";
import { LineChart } from "react-native-gifted-charts";

import * as SecureStore from 'expo-secure-store';
import moment from "moment";
import { sensorDetailServices } from "@/services/sensordataservices";

export default function GraphPeakFlow() {
    const [start, setStart] = useState<string>("");
    const [end, setEnd] = useState<string>("");

    const [data, setData] = useState([])

    const fetchSensorInfoData = async (spacer_id: number) => {
        try {
            await sensorDetailServices.getSensorDetailByDate(spacer_id, moment(start).format("YYYY-MM-DD"), moment(end).format("YYYY-MM-DD"), 2).then((data) => {
                const parsedData = data.map((item:any) => ({ value: item.flow_rate }));
                setData(parsedData);
            });
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        if (start == "" && end == "") {
            var curr = new Date; // get current date
            var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
            var last = first + 6; // last day is the first day + 6

            var firstday = moment(curr.setDate(first)).format("YYYY-MM-DD").toString();
            var lastday = moment(curr.setDate(last)).format("YYYY-MM-DD").toString();

            setStart(firstday);
            setEnd(lastday);

        }

        fetchSensorInfoData(1);
    }, [start]);

    return (
        <View>
            <Text style={style.header}>Peak Expiratory Flow</Text>
            <View style={style.tabComponent}>
                <GraphTabMenu 
                    setStart={setStart}
                    setEnd={setEnd}
                />
            </View>
            <View style={style.chartComponent}>
                <LineChart
                    data={data}
                    width={Dimensions.get("window").width / 1.3}
                    spacing={data.length ? Dimensions.get("window").width / (data.length * 1.3) : 0}
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