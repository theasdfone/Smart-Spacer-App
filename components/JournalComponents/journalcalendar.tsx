import { useEffect, useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import CalendarStrip from 'react-native-calendar-strip';

import Profile from "../util/profilepicture";
import { placeholder } from "@/placeholder/placeholder";
import { Journal } from "../models/journal";
import { journalServices } from "@/services/journalservices";

type Props = {
    setSelectedDate: React.Dispatch<React.SetStateAction<any>>;
}

export default function JournalCalendar({ setSelectedDate }: Props) {
    const [calendarMonth, setCalendarMonth] = useState<string>("");

    const [journals, setJournals] = useState<Journal[]>([]);

    useEffect(() => {
        const fetchJournalsData = async () => {
            try {
                const result = await journalServices.getJournals();
                setJournals(result);
            } catch (err) {
                console.log(err)
            }
        };

        fetchJournalsData();
    }, []);

    let markedDatesArray: any = [];

    journals.map((item, i) => {
        markedDatesArray.push({
            date: item.Date,
            dots: [
                {
                    color: "green",
                },
            ],
        });
    });

    return (
        <View style={style.shadows}>
            <View style={style.container}>
                <View style={style.navbar}>
                    <Text style={style.calendarHeader}>{calendarMonth}</Text>
                    <Profile />
                </View>

                <CalendarStrip
                    showMonth={false}
                    style={{
                        height: 75,
                        paddingHorizontal: 20
                    }}
                    calendarHeaderStyle={{ fontSize: 24 }}
                    onWeekChanged={(start, end) => {
                        setCalendarMonth(start.format("MMMM YYYY").toString());
                    }}
                    onDateSelected={(date) => {
                        setSelectedDate(date.format("dddd, MMMM Do YYYY").toString());
                    }}
                    markedDates={markedDatesArray}
                />
            </View>
            <Text>{journals.toString()}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    shadows: {
        overflow: "hidden",
        paddingBottom: 5
    },

    container: {
        backgroundColor: '#fff',
        elevation: 5,
    },

    navbar: {
        flexDirection: 'row',
        alignItems: "center",
        paddingHorizontal: 20
    },

    calendarHeader: {
        fontSize: 40,
        width: "85%"
    },
});