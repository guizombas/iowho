import { RouteProp, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CashInput from "../components/forms/CashInput";
import TransacaoHeader from "../components/transacao/TransacaoHeader";
import { colors } from "../design/colors";

interface ITransacaoScreenProps{
    userToFriend: boolean,
}

export default function Transacao(){

    const params = useRoute().params as ITransacaoScreenProps;

    const [ cashValue, setCashValue ] = useState(0);
    const pallet = params.userToFriend ? colors.prim : colors.sec
    
    const headerStyle = {
        backgroundColor: pallet.x
    }

    return (
        <View>
            <View style={{
                ...styles.header,
                ...headerStyle
            }}>
                <TransacaoHeader userToFriend={params.userToFriend}/>
                <CashInput 
                    value={cashValue}
                    onChangeText={setCashValue}
                    color={pallet.text}
                    style={styles.cashInput}
                />
            </View>
            <View>
                <Text>Form</Text>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: 25
    },
    cashInput: {
        alignSelf: "flex-end",
        paddingTop: 15,
        paddingHorizontal: 25,
        paddingBottom: 10
    }
})