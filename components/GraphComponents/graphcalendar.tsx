import { placeholder } from "@/placeholder/placeholder";
import { Image } from "expo-image";
import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CalendarStrip from 'react-native-calendar-strip';
import { SpacerUse } from "../objects/spaceruse";

export default function GraphCalendar() {
    // Todo: Write an API which takes the start and end dates and returns a list of data of whether 
    const [start, setStart] = useState<string>("");
    const [end, setEnd] = useState<string>("");
    
    const [spacerUse, setSpacerUse] = useState<SpacerUse[]>(placeholder.spaceruse);

    const techniqueSource = (technique?: number) => {
        if(technique == 1) {
            return require('../../assets/images/graphs/good-technique-icon.png');
        } else if(technique == 2) {
            return require('../../assets/images/graphs/missed-technique-icon.png');
        } else if(technique == 3) {
            return require('../../assets/images/graphs/poor-technique-icon.png');
        }

        return '';
    }

    return (
        <View>
            <CalendarStrip 
                style={{
                    height: 75,
                    width: 400,
                    paddingLeft: 15
                }}
                calendarHeaderStyle={{ fontSize: 24 }}
                onWeekChanged={(start, end) => {
                    setStart(start.toString());
                    setEnd(end.toString())
                }}
            />
            <View style={style.infoContainer}>
                <View style={style.labelContainer}>
                    <View style={style.iconContainers}>
                        <Image 
                            style={style.iconsLabels}
                            source={require('../../assets/images/graphs/Sun.png')}
                        />
                        <Text>M</Text>
                    </View>
                    <View style={style.iconContainers}>
                        <Image 
                            style={style.iconsLabels}
                            source={require('../../assets/images/graphs/Moon.png')}
                        />
                        <Text>N</Text>
                    </View>
                </View>
                <View style={style.statusCalendarTable}>
                    {   
                        // when we fetch the data the backend will guarantee its sorted from start date to end date
                        spacerUse.map((data) => {
                            let morningTechSource = techniqueSource(data.MorningTechnique);
                            let eveningTechSource = techniqueSource(data.EveningTechnique);

                            return(
                                <View key={data.SpacerUseId}>
                                    <View>
                                        <Image
                                            style={style.icons}
                                            source={morningTechSource}
                                        />
                                    </View>
                                    <View style={style.statusContainers}>
                                        <Image 
                                            style={style.icons}
                                            source={eveningTechSource}
                                        />
                                    </View>
                                    <View style={style.statusContainers}>
                                        <View style={style.statusWrapper}>
                                            <Image
                                                style={style.icons}
                                                source={require('../../assets/images/graphs/reliever-icon.png')}
                                            />
                                            <View style={style.relieverCount}>
                                                <Text style={style.relieverTag}>
                                                    x{data.RelieverCount}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
            <View style={style.descriptionsContainer}>
                <View style={style.descriptionRow}>
                    <View style={style.iconContainers}>
                        <Image 
                            style={style.icons}
                            source={require('../../assets/images/graphs/good-technique-icon.png')}
                        />
                        <Text>Great Spacer Technique</Text>
                    </View>
                    <View style={style.iconContainers}>
                        <Image 
                            style={style.icons}
                            source={require('../../assets/images/graphs/poor-technique-icon.png')}
                        />
                        <Text>Poor Spacer Technique</Text>
                    </View>
                </View>
                <View style={style.descriptionRow}>
                    <View style={style.iconContainers}>
                        <Image 
                            style={style.icons}
                            source={require('../../assets/images/graphs/missed-technique-icon.png')}
                        />
                        <Text>Missed Spacer Use</Text>
                    </View>
                    <View style={style.iconContainers}>
                        <Image 
                            style={style.icons}
                            source={require('../../assets/images/graphs/reliever-icon.png')}
                        />
                        <Text>Reliever Use</Text>
                    </View>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    infoContainer: {
        flexDirection: "row",
    },

    labelContainer: {
        marginTop: 16,
        gap: 25
    },

    iconContainers: {
        flexDirection: "row",
    },

    iconsLabels: {
        height: 20,
        width: 20,
        marginRight: 5
    },

    icons: {
        height: 25,
        width: 25,
        marginRight: 5
    },

    statusContainers: {
        paddingTop: 20
    },
    
    statusWrapper: {
        position: "relative"
    },

    statusCalendarTable: {
        marginLeft: 5,
        paddingTop: 12,
        paddingLeft: 5.5,
        flexDirection: "row",
        borderTopWidth: 1,
        borderLeftWidth: 1,
        gap: 19,
    },

    relieverCount: {
        backgroundColor: "#D9D9D9",
        width: 20,
        height: 20,
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        marginLeft: 15,
        marginTop: 15
    },

    relieverTag: {
        fontSize: 13,
        fontWeight: "bold"
    },

    descriptionsContainer: {
        flexDirection: "row",
        marginLeft: 50,
        marginTop: 30,
        gap: 20
    },

    descriptionRow: {
        gap: 15
    }
});