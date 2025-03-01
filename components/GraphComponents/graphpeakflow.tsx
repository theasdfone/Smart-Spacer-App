import { useState } from "react";
import { Text, View, StyleSheet, Pressable, Dimensions } from "react-native";
import { User } from "../objects/user";
import { placeholder } from "@/placeholder/placeholder";
import GraphTabMenu from "./graphtabmenu";

export default function GraphPeakFlow() {
    const [user, setUser] = useState<User>(placeholder.user);

    return (
       <View>
            <Text style={style.header}>Peak Expiratory Flow</Text>
            <View style={style.tabComponent}>
                <GraphTabMenu />
            </View>
            <View>

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
    }
});