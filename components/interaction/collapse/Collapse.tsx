import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react"
import { StyleSheet, View } from "react-native";
import { colors } from "../../../design/colors";
import useToggle from "../../../hooks/useToggle";
import IconButton from "../buttons/IconButton";

interface ICollaspseProps{
    children: React.ReactNode
}

export default function Collaspse(props: ICollaspseProps){

    const [ show, toggleShow ] = useToggle();

    return (
        <View style={styles.stretch}>
            <View
                style={{
                    maxHeight: show ? "100%" : 0
                }}
            >
                {props.children}
            </View>
            <IconButton
                icon={ show ? faChevronUp : faChevronDown}
                onPress={toggleShow}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    stretch: {
        alignSelf: "stretch",

    },
})