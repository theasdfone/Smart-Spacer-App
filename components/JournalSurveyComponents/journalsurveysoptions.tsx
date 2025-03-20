import { Image } from "expo-image"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Option } from "../models/option"

type Props = {
    selectedOption: number,
    textOptions: Option
}

export default function JournalSurveyOptions({ selectedOption, textOptions }: Props) {
    return (
        <View style={style.main}>
            <TouchableOpacity>
                <View style={style.checkBoxContainer}>
                    <Image
                        source={require("@/assets/images/journalsurveys/bunny-good.png")}
                        style={selectedOption == 1 ? style.bunnyImageSelected : style.bunnyImageNotSelected}
                    />
                    <View style={selectedOption == 1 ? style.optionTextContainer : style.optionTextNotSelectedContainer}>
                        <Text style={selectedOption == 1 ? style.optionText : style.optionTextNotSelected}>{textOptions.good}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={style.checkBoxContainer}>
                    <Image
                        source={require("@/assets/images/journalsurveys/bunny-neutral.png")}
                        style={selectedOption == 2 ? style.bunnyImageSelected : style.bunnyImageNotSelected}
                    />
                    <View style={selectedOption == 2 ? style.optionTextContainer : style.optionTextNotSelectedContainer}>
                        <Text style={selectedOption == 2 ? style.optionText : style.optionTextNotSelected}>{textOptions.neutral}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={style.checkBoxContainer}>
                    <Image
                        source={require("@/assets/images/journalsurveys/bunny-unwell.png")}
                        style={selectedOption == 3 ? style.bunnyImageSelected : style.bunnyImageNotSelected}
                    />
                    <View style={selectedOption == 3 ? style.optionTextContainer : style.optionTextNotSelectedContainer}>
                        <Text style={selectedOption == 3 ? style.optionText : style.optionTextNotSelected}>{textOptions.bad}</Text>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={style.checkBoxContainer}>
                    <Image
                        source={require("@/assets/images/journalsurveys/bunny-sad.png")}
                        style={selectedOption == 4 ? style.bunnyImageSelected : style.bunnyImageNotSelected}
                    />
                    <View style={selectedOption == 4 ? style.optionTextContainer : style.optionTextNotSelectedContainer}>
                        <Text style={selectedOption == 4 ? style.optionText : style.optionTextNotSelected}>{textOptions.horrible}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}

const style = StyleSheet.create({
    main: {
        marginTop: 10
    },

    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },

    optionTextContainer: {
        width: "80%",
        minHeight: 40,
        marginTop: 15,
        marginLeft: 25,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: "center"
    },

    optionText: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 7,
        paddingLeft: 20,
    },

    optionTextNotSelectedContainer: {
        width: "80%",
        minHeight: 40,
        marginTop: 15,
        marginLeft: 25,
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: "center",
        borderColor: "#A7A1A1"
    },

    optionTextNotSelected: {
        fontSize: 20,
        fontWeight: "bold",
        padding: 7,
        paddingLeft: 20,
        color: "#A7A1A1"
    },

    bunnyImageSelected: {
        width: 40,
        height: 40,
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: "white"
    },

    bunnyImageNotSelected: {
        width: 40,
        height: 40,
        marginTop: 10,
        borderRadius: 50,
        backgroundColor: "#EEEEEE"
    },

});