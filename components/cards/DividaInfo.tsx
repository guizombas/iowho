import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useMemo } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { colors } from "../../design/colors";
import { IDividaInfo } from "../../interfaces/Divida/IDividaInfo";
import Collaspse from "../interaction/collapse/Collapse";
import CurrencyText from "../preferences/CurrencyText";
import PreferenceText from "../preferences/PreferenceText";
import Hr from "../view/Hr";
import TransacaoInfo from "./TransacaoInfo";

interface IDividaInfoProps extends IDividaInfo{
    last?: boolean
}

export default function DividaInfo(props: IDividaInfoProps){

    const userOwnsFriend = props.valor > 0;

    const transacoes = useMemo(()=>{
        return props.transacoes.sort((a, b) => b.data.getTime() - a.data.getTime())
    }, [props.transacoes]);

    return (
        <View style={{
            ...styles.card,
            marginBottom: props.last ? 30 : undefined,
        }}>
            {/* <RoudICon
                dimensions={60}
                icon={ userOwnsFriend ? faArrowDown : faArrowUp }
                iconSize={23}
                pallet={ userOwnsFriend ? colors.sec : colors.prim }
                style={styles.circleDiv}
            /> */}

            <View style={styles.dividaInfo}>
                <FontAwesomeIcon 
                    icon={ userOwnsFriend ? faArrowDown : faArrowUp } 
                    color={ userOwnsFriend ? colors.sec.dark : colors.prim.dark }
                    style={styles.circleDiv} 
                    size={23}
                />
                <View style={styles.infoView}>
                    <Text style={styles.name}>{props.pessoa.nome}</Text>
                    <PreferenceText 
                        style={styles.label}
                        after=":"
                        text={userOwnsFriend ? "vc o deve" : "deve vc"  }
                    />
                    <CurrencyText style={styles.money}>{Math.abs(props.valor)}</CurrencyText>
                </View>
            </View>

            <Hr />

            <Collaspse>
                <FlatList
                    data={transacoes}
                    renderItem={ (t) =>
                        <TransacaoInfo {...t.item} nome={props.pessoa.nome}/>
                    }
                    keyExtractor={ t => String(t.id) }
                />
            </Collaspse>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        margin: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: colors.white,
    },
    dividaInfo:{
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },

    font: {
        color: colors.gray.dark
    },
    button: {
        borderRadius: 5,
    },

    infoView: {
        flex: 1
    },
    name: {
        fontSize: 18
    },
    label: {
        color: colors.gray.x,
        flex: 1,
        textAlign: "right",
        marginTop: 10
    },
    money: {
        fontWeight: "bold",
        fontSize: 20,
        flex: 1,
        textAlign: "right"
    },

    circleDiv: {
        marginLeft: 0,
        marginRight: 10
    },
})