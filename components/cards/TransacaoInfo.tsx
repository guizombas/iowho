import { StyleSheet, Text, View } from "react-native";
import { colors } from "../../design/colors";
import { ITransacaoInfo } from "../../interfaces/Transacao/ITransacaoInfo";
import { formatDate, formatMoneyReais } from "../../utils/format";

interface ITransacaoInfoProps extends ITransacaoInfo{
    nome: string
}

export default function TransacaoInfo(props: ITransacaoInfoProps){
    const userOwnsFriend = props.valor > 0;
    const titleStyles = {
        color: userOwnsFriend ? colors.sec.dark : colors.prim.dark
    }

    return (
        <View style={styles.container}>
            <Text style={styles.data}>{formatDate(props.data)}</Text>
            <Text style={{
                ...styles.title,
                ...titleStyles
            }}
            >
                {userOwnsFriend ? `${props.nome} te emprestou ` : `Você emprestou ${props.nome} `}
                {formatMoneyReais(Math.abs(props.valor))}
            </Text>
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
    }
})