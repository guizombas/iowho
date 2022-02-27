import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../design/colors";
import { ITransacaoInfo } from "../../interfaces/Transacao/ITransacaoInfo";
import { formatDate, formatMoneyReais } from "../../utils/format";
import CurrencyText from "../preferences/CurrencyText";
import DateText from "../preferences/DateText";
import PreferenceText from "../preferences/PreferenceText";

interface ITransacaoInfoProps extends ITransacaoInfo{
    nome: string
}

export default function TransacaoInfo(props: ITransacaoInfoProps){
    const userOwnsFriend = props.valor > 0;
    const titleStyles = {
        color: userOwnsFriend ? colors.sec.dark : colors.prim.dark,
        ...styles.title,
    }

    return (
        <View style={styles.container}>
            <DateText style={styles.data}>{props.data}</DateText>
            <View style={styles.inline}>
                <PreferenceText 
                    style={titleStyles}
                    text={userOwnsFriend ? "te emprestou" : "você emprestou"}
                    before={userOwnsFriend ? `${props.nome} ` : ''}
                    after={userOwnsFriend ? ' ' : ` ${props.nome} `}
                />
                <CurrencyText style={titleStyles}>{Math.abs(props.valor)}</CurrencyText>
            </View>
            <Text style={styles.desc}>{props.descricao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20
    },

    desc: {
        color: colors.black
    },
    data: {
        color: colors.gray.x
    },
    title: {
        fontWeight: "bold"
    },
    inline: {
        flexDirection: "row"
    }
})