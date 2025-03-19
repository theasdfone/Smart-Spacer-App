import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Profile from "../util/profilepicture";
import { Image } from "expo-image";
import { router } from "expo-router";

type Props = {
    date: string
}

export default function JournalSurveysHeader({ date }: Props) {
    return (
        <View style={style.shadows}>
            <View style={style.container}>
                <View style={style.navbar}>
                    <TouchableOpacity
                        onPress={router.back}
                    >
                        <Image
                            source={require("@/assets/images/back-button.png")}
                            style={style.imageBackButton}
                        />
                    </TouchableOpacity>

                    <Text style={style.calendarHeader}>{date}</Text>
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
        fontSize: 20,
        paddingLeft: 20,
        width: "85%",
    },

    imageBackButton: {
        width: 15,
        height: 15,
    },
});