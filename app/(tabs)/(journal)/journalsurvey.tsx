import { Journal } from "@/components/models/journal";
import { journalServices } from "@/services/journalservices";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from 'expo-secure-store';

export default function JournalSurvey() {
    const { date } = useLocalSearchParams();
    const [journal, setJournal] = useState<Journal>();

    useEffect(() => {
        const child = SecureStore.getItem("child");

        const fetchJournalData = async (child_id: string) => {
            try {
                const result = await journalServices.getJournalsByChildIdAndDate(child_id, date.toString());
                setJournal(result);
            } catch (err) {
                console.log(err)
            }
        };

        if (child) {
            fetchJournalData(JSON.parse(child).id);
        } else {
            throw console.error("Child not found");
        }
    }, [date]);

    return (
        <SafeAreaView style={style.main}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text>Journal: {journal?.toString()} {date}</Text>
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