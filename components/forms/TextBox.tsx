import { useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View, ViewStyle } from "react-native";
import { colors } from "../../design/colors";

interface ITextBoxProps extends TextInputProps{
    label?: string,
    wrapperStyles?: ViewStyle,
    color?: string,
}

export default function TextBox(props: ITextBoxProps){

    const textboxStyles = {
        ...styles.textBox,
        borderBottomColor: props.color ?? colors.info.dark,
        color: props.color ?? colors.info.dark,
    }

    return (
        <View style={{...styles.textBoxView, ...props.wrapperStyles}}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput 
                {...props}
                style={textboxStyles}
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
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#f0f0f0",
        borderTopWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        padding: 20,
        minHeight: 75,
    },
    textBoxView: {
        flex: 1,
    },
    label: {
        fontWeight: "bold",
        marginBottom: 5,
        marginLeft: 5,
        fontSize: 18
    }
})