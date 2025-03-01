import { useState } from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import CalendarStrip from 'react-native-calendar-strip';

import * as ImagePicker from 'expo-image-picker';
import Profile from "../util/profilepicture";
import moment, { Moment } from "moment";
import { placeholder } from "@/placeholder/placeholder";
import { Journal } from "../objects/journal";

type Props = {
    setSelectedDate: React.Dispatch<React.SetStateAction<any>>; 
}

export default function JournalCalendar({setSelectedDate} : Props) {
        const [image, setImage] = useState<string | undefined>(undefined);
        const [calendarMonth, setCalendarMonth] = useState<string>("");
        const defaultImg = require('@/assets/images/icon.png');

        const [start, setStart] = useState<Moment>();
    
        const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          quality: 1,
        });
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
        }
      };

      let markedDatesArray : any = [];

      placeholder.journal.map((item, i) => {
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
                <Pressable style={style.profile} onPress={pickImage}>
                    <Profile imgSource={defaultImg} selectedImage={image} />
                </Pressable>
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

    profile: {
        height: 40,
        width: 40,
        borderRadius: 40,
    },
});