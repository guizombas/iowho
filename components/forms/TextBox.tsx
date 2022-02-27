import { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { colors } from "../../design/colors";

interface ITextBoxProps extends TextInputProps{
    label?: string
}

export default function TextBox(props: ITextBoxProps){

    return (
        <View style={styles.textBoxView}>
            <TextInput 
                {...props}
                style={styles.textBox}
                multiline
                numberOfLines={100}
                textAlignVertical="top"
            />
        </View>
        
    )
}

const styles = StyleSheet.create({
    textBox: {
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
        flex: 1,
        justifyContent: "flex-start",
        padding: 20
    },
    textBoxView: {
        flex: 1,
    }
})