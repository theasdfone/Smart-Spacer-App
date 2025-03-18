import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function JournalSurvey() {
    const { date } = useLocalSearchParams();

    return (
        <SafeAreaView style={style.main}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text>{date}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
    },

    calendar: {
        marginTop: 40,
    },

    components: {
        marginTop: 20,
        paddingHorizontal: 20
    },

    end: {
        marginTop: 15
    }
});