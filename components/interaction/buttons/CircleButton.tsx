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

    dimentions: number,

    disabled?: boolean
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
                backgroundColor: props.disabled ? props.pallet.text : (
                    button.pressed ? props.pallet.light :  props.pallet.x
                ),
                borderColor: props.disabled ? props.pallet.light : undefined,
                borderWidth: props.disabled ? 1 : 0, 
                ...props.style
            })}
            onPress={props.onPress}
            disabled={props.disabled}
        >
            <FontAwesomeIcon 
                icon={props.icon} 
                color={props.disabled ? props.pallet.light : props.pallet.text}
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