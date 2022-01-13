import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { StyleProp } from "react-native";
import { Falsy, Pressable, RecursiveArray, RegisteredStyle, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors, IColorPallet } from "../../../design/colors";

interface ICircleButtonProps{
    icon: IconProp,
    onPress: () => void,

    pallet: IColorPallet,

    style?: ViewStyle,
    iconSize?: number,

    dimentions: number
}

export default function CircleButton(props: ICircleButtonProps){

    const buttonStyle = {
        height: props.dimentions,
        width: props.dimentions,
        borderRadius: props.dimentions / 2,
    }

    return (
        <Pressable 
            style={ button => ({
                ...styles.circleButton,
                ...buttonStyle,
                backgroundColor: button.pressed ? props.pallet.light :  props.pallet.x,
                ...props.style
            })}
            onPress={props.onPress}
        >
            <FontAwesomeIcon 
                icon={props.icon} 
                color={props.pallet.text}
                size={props.iconSize}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    circleButton: {
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: "center",
    },
})