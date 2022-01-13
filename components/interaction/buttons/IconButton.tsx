import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Pressable, StyleSheet, Text, ViewStyle } from "react-native";
import { colors } from "../../../design/colors";

interface IIconButtonProps{
    icon: IconProp,
    label?: string,
    onPress: () => void,
    style?: ViewStyle,
    selected?: boolean,
    selectedColor?: string,
    iconColor?: string,
    iconSize?: number,
    backgroundColorPressed?: string
}

export default function IconButton(props: IIconButtonProps){

    const fontStyle = { 
        color: ( props.selected && props.selectedColor) ? props.selectedColor : props.iconColor ?? colors.gray.dark
    }

    return (
        <Pressable 
            style={ (button) => ({
                ...styles.IconButton,
                backgroundColor: button.pressed ? (props.backgroundColorPressed ?? colors.gray.light) : undefined,
                ...props.style
            })}
            hitSlop={10}
            pressRetentionOffset={10}
            onPress={props.onPress}
        >
            <FontAwesomeIcon icon={props.icon} style={fontStyle} size={props.iconSize}/>
            { props.label && <Text style={fontStyle}>{props.label}</Text> }
        </Pressable>
    )
}

const styles = StyleSheet.create({
    IconButton: {
        alignItems: 'center',
        padding: 10
    }
})