import { Text, View, StyleSheet } from "react-native";
import Profile from "../util/profilepicture";

export default function GraphHeader() {
    return (
        <View style={style.shadows}>
            <View style={style.container}>
                <View style={style.navbar}>
                    <Text style={style.calendarHeader}>Graph & Data</Text>
                    <Profile />
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    shadows: {
        overflow: "hidden",
        paddingBottom: 5,
    },

    container: {
        backgroundColor: '#fff',
        elevation: 5,
    },

    navbar: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 20,
        height: 75
    },

    calendarHeader: {
        fontSize: 40,
        width: "85%",
    },
});