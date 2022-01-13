import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome"
import { StyleSheet, View, ViewStyle } from "react-native"
import { IColorPallet } from "../../design/colors"

interface IRoudIConProps{
    pallet: IColorPallet,

    icon: IconProp,
    iconSize: number,

    dimensions: number,
    style?: ViewStyle
}

export default function RoudICon(props: IRoudIConProps){

    const roundStyle = {
        backgroundColor: props.pallet.light,
        width: props.dimensions,
        height: props.dimensions,
        borderRadius: props.dimensions / 2,
    }
    const iconStyle = {
        color: props.pallet.dark
    }

    return (
        <View style={{
            ...styles.roundDiv,
            ...roundStyle,
            ...props.style
        }}>
            <FontAwesomeIcon 
                icon={props.icon} 
                style={iconStyle} 
                size={props.iconSize}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    roundDiv: {
        alignItems: 'center',
        justifyContent: 'center',
    },
})