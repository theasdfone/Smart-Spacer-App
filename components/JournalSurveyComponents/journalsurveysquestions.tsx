import { View, StyleSheet, Text, TouchableOpacity, TextInput } from "react-native";
import Checkbox from 'expo-checkbox';
import { Journal } from "../models/journal";

import ProgressCircle from 'react-native-progress/Circle';
import { useState } from "react";
import JournalSurveyOptions from "./journalsurveysoptions";
import { optionslist } from "./optionslist";

type Props = {
    journal: Journal | undefined
}

export default function JournalSurveyQuestions({ journal }: Props) {
    const [isChecked, setChecked] = useState(false);
    const [comments, setComments] = useState('');

    return (
        <View>
            {/* Question 1 */}
            <View style={style.questionHeaderContainer}>
                <ProgressCircle
                    progress={0.83}
                    color={"#D9D9D9"}
                    size={75}
                    thickness={12}
                    unfilledColor={"#ADADAD"}
                    strokeCap={"round"}
                />
                <View style={style.moveContainerInsideCircle}>
                    <View style={style.questionNumContainer}>
                        <Text style={style.questionNumHeader}>1/6</Text>
                    </View>
                </View>

                <View style={style.questionTitleContainer}>
                    <Text style={style.questionTitle}>Has your child experienced or been around any of the following today?</Text>
                    <Text>Please select all that apply:</Text>
                </View>
            </View>
            <View>
                <View style={style.checkBoxContainer}>
                    <Checkbox
                        style={style.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? 'black' : "#A7A1A1"}
                    />
                    <View style={isChecked ? style.optionTextContainer : style.optionTextNotSelectedContainer}>
                        <Text style={isChecked ? style.optionText : style.optionTextNotSelected}>A cold, flu, or other illness</Text>
                    </View>
                </View>
                <View style={style.checkBoxContainer}>
                    <Checkbox
                        style={style.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? 'black' : "#A7A1A1"}
                    />
                    <View style={isChecked ? style.optionTextContainer : style.optionTextNotSelectedContainer}>
                        <Text style={isChecked ? style.optionText : style.optionTextNotSelected}>Feeling stressed or very emotional</Text>
                    </View>
                </View>
                <View style={style.checkBoxContainer}>
                    <Checkbox
                        style={style.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? 'black' : "#A7A1A1"}
                    />
                    <View style={isChecked ? style.optionTextContainer : style.optionTextNotSelectedContainer}>
                        <Text style={isChecked ? style.optionText : style.optionTextNotSelected}>Near dust, pets, pollen, or mold</Text>
                    </View>
                </View>
                <View style={style.checkBoxContainer}>
                    <Checkbox
                        style={style.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? 'black' : "#A7A1A1"}
                    />
                    <View style={isChecked ? style.optionTextContainer : style.optionTextNotSelectedContainer}>
                        <Text style={isChecked ? style.optionText : style.optionTextNotSelected}>Running, playing or other physical activity</Text>
                    </View>
                </View>
                <View style={style.checkBoxContainer}>
                    <Checkbox
                        style={style.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? 'black' : "#A7A1A1"}
                    />
                    <View style={isChecked ? style.optionTextContainer : style.optionTextNotSelectedContainer}>
                        <Text style={isChecked ? style.optionText : style.optionTextNotSelected}>Near smoke or strong smells</Text>
                    </View>
                </View>
                <View style={style.checkBoxContainer}>
                    <Checkbox
                        style={style.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? 'black' : "#A7A1A1"}
                    />
                    <View style={isChecked ? style.optionTextContainer : style.optionTextNotSelectedContainer}>
                        <Text style={isChecked ? style.optionText : style.optionTextNotSelected}>Other:_________</Text>
                    </View>
                </View>

            </View>

            {/* Question 2 */}
            <View style={style.questionHeaderContainer}>
                <ProgressCircle
                    progress={0.67}
                    color={"#D9D9D9"}
                    size={75}
                    thickness={12}
                    unfilledColor={"#ADADAD"}
                    strokeCap={"round"}
                />
                <View style={style.moveContainerInsideCircle}>
                    <View style={style.questionNumContainer}>
                        <Text style={style.questionNumHeader}>2/6</Text>
                    </View>
                </View>

                <View style={style.questionTitleContainer}>
                    <Text style={style.questionTitle}>Did your child cough today?</Text>
                </View>
            </View>

            <View>
                <JournalSurveyOptions
                    selectedOption={1}
                    textOptions={optionslist.q2}
                />
            </View>

            {/* Question 3 */}
            <View style={style.questionHeaderContainer}>
                <ProgressCircle
                    progress={0.50}
                    color={"#D9D9D9"}
                    size={75}
                    thickness={12}
                    unfilledColor={"#ADADAD"}
                    strokeCap={"round"}
                />
                <View style={style.moveContainerInsideCircle}>
                    <View style={style.questionNumContainer}>
                        <Text style={style.questionNumHeader}>3/6</Text>
                    </View>
                </View>

                <View style={style.questionTitleContainer}>
                    <Text style={style.questionTitle}>Did your child wheeze today?</Text>
                </View>
            </View>

            <View>
                <JournalSurveyOptions
                    selectedOption={1}
                    textOptions={optionslist.q3}
                />
            </View>

            {/* Question 4 */}
            <View style={style.questionHeaderContainer}>
                <ProgressCircle
                    progress={0.33}
                    color={"#D9D9D9"}
                    size={75}
                    thickness={12}
                    unfilledColor={"#ADADAD"}
                    strokeCap={"round"}
                />
                <View style={style.moveContainerInsideCircle}>
                    <View style={style.questionNumContainer}>
                        <Text style={style.questionNumHeader}>4/6</Text>
                    </View>
                </View>

                <View style={style.questionTitleContainer}>
                    <Text style={style.questionTitle}>Did your child's asthma affect normal activity?</Text>
                </View>
            </View>

            <View>
                <JournalSurveyOptions
                    selectedOption={1}
                    textOptions={optionslist.q4}
                />
            </View>

            {/* Question 5 */}
            <View style={style.questionHeaderContainer}>
                <ProgressCircle
                    progress={0.17}
                    color={"#D9D9D9"}
                    size={75}
                    thickness={12}
                    unfilledColor={"#ADADAD"}
                    strokeCap={"round"}
                />
                <View style={style.moveContainerInsideCircle}>
                    <View style={style.questionNumContainer}>
                        <Text style={style.questionNumHeader}>5/6</Text>
                    </View>
                </View>

                <View style={style.questionTitleContainer}>
                    <Text style={style.questionTitle}>Did your child's asthma wake them up last night?</Text>
                </View>
            </View>

            <View>
                <JournalSurveyOptions
                    selectedOption={1}
                    textOptions={optionslist.q5}
                />
            </View>

            {/* Question 6 */}
            <View style={style.questionHeaderContainer}>
                <ProgressCircle
                    progress={0}
                    color={"#D9D9D9"}
                    size={75}
                    thickness={12}
                    unfilledColor={"#ADADAD"}
                />
                <View style={style.moveContainerInsideCircle}>
                    <View style={style.questionNumContainer}>
                        <Text style={style.questionNumHeader}>6/6</Text>
                    </View>
                </View>

                <View style={style.questionTitleContainer}>
                    <Text style={style.questionTitle}>Comments</Text>
                    <Text>Activities, triggers, notable items</Text>
                </View>
            </View>

            <View style={style.commentFieldContainer}>
                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={setComments}
                    value={comments}
                    placeholder="Add comments"
                    style={style.commentField}
                />
            </View>

            <View style={style.alignButton}>
                <TouchableOpacity
                    style={style.submitButton}
                >
                    <View style={style.textContainer}>
                        <Text style={style.buttonText}>Submit</Text>
                    </View>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const style = StyleSheet.create({
    questionHeaderContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 40
    },

    moveContainerInsideCircle: {
        position: "absolute",
        marginLeft: 23,
        marginTop: 27
    },

    questionNumContainer: {
        alignItems: "center",
    },

    questionNumHeader: {
        fontSize: 20,
        fontWeight: "bold"
    },

    questionTitleContainer: {
        width: "80%",
        paddingLeft: 10
    },

    questionTitle: {
        fontSize: 20,
        fontWeight: "bold",
        flexWrap: "wrap",
    },

    checkBoxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20
    },

    checkbox: {
        margin: 8,
        marginTop: 20
    },

    optionTextContainer: {
        width: "80%",
        minHeight: 40,
        marginTop: 20,
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
        marginTop: 20,
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

    alignButton: {
        justifyContent: "center",
        alignItems: "center",
    },

    submitButton: {
        backgroundColor: "#119DA4",
        height: 35,
        width: 120,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
    },

    textContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },

    buttonText: {
        color: "#F4F4F4",
        fontSize: 20,
        fontWeight: "bold"
    },

    commentFieldContainer: {
        borderRadius: 10,
        marginTop: 10,
        marginLeft: 10,
        padding: 15,
        width: "95%",
        backgroundColor: "#D9D9D9"
    },

    commentField: {
        height: 100,
        textAlignVertical: 'top',
        fontSize: 16
    }
});