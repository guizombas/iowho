import { StyleSheet, View } from "react-native";
import { colors } from "../../design/colors";

export default function Hr(){
    return (
        <View style={styles.hr}/>
    )
}

const styles = StyleSheet.create({
    hr: {
        borderTopColor: colors.gray.light,
        borderTopWidth: 1,
        alignSelf: "stretch",
        marginVertical: 10
    }
})