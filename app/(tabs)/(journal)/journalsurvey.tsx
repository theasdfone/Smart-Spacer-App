import { Journal } from "@/components/models/journal";
import { journalServices } from "@/services/journalservices";
import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as SecureStore from 'expo-secure-store';
import JournalSurveysHeader from "@/components/JournalSurveyComponents/journalsurveysheader";
import JournalSurveyQuestions from "@/components/JournalSurveyComponents/journalsurveysquestions";

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
                <View style={style.header}>
                    <JournalSurveysHeader
                        date={date.toString()}
                    />
                </View>
                <View style={style.components}>
                    <JournalSurveyQuestions 
                        journal={journal}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: "white",
    },

    header: {
        marginTop: 40,
    },

    components: {
        paddingHorizontal: 20,
    },

    end: {
        marginTop: 15
    }
});