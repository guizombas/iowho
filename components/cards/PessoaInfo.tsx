import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../design/colors";
import { IPessoaInfo } from "../../interfaces/Pessoa/IPessoaInfo";
import IconButton from "../interaction/buttons/IconButton";

interface IPessoaInfoProps extends IPessoaInfo{
    last?: boolean
}

export default function PessoaInfo(props: IPessoaInfoProps){
    return (
        <View style={{
            ...styles.pessoaInfo,
            marginBottom: props.last ? 30 : undefined
        }}>
            <Text style={styles.font}>{props.nome}</Text>
            <IconButton
                onPress={ () => {global.alert("UEUM")} }
                icon={faEllipsisH}
                style={styles.button}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    pessoaInfo:{
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.white,
        flexDirection: 'row',
    },
    font: {
        color: colors.gray.dark
    },
    button: {
        borderRadius: 5,
    }
})