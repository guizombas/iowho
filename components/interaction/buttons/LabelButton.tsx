import { Pressable, StyleSheet, Text, ViewStyle } from "react-native"
import { IColorPallet } from "../../../design/colors"


interface ILabelButtonProps{
    children: string,
    onPress?: () => void,
    pallet: IColorPallet,
    
    style?: ViewStyle,
}

export default function LabelButton(props: ILabelButtonProps){

    return (
        <Pressable 
            style={ button => ({
                ...styles.LabelButton,
                borderWidth: 2,
                borderColor: props.pallet.x,
                backgroundColor: button.pressed ? props.pallet.x :  props.pallet.light,
                ...props.style
            })}
            onPress={props.onPress}
        >
            <Text style={{
                color: props.pallet.dark,
            }}>
                {props.children}
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    LabelButton: {
        alignItems: 'center',
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 20,
        paddingHorizontal: 15,
        paddingVertical: 5
    },
})