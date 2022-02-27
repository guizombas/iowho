import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CashInput from "../components/forms/CashInput";
import TextBox from "../components/forms/TextBox";
import CircleButton from "../components/interaction/buttons/CircleButton";
import TransacaoHeader from "../components/transacao/TransacaoHeader";
import { colors } from "../design/colors";

interface ITransacaoScreenProps{
    userToFriend: boolean,
}

export default function Transacao(){

    const params = useRoute().params as ITransacaoScreenProps;

    const [ cashValue, setCashValue ] = useState(0);
    const [ descricao, setDescricao ] = useState("socorro");

    const pallet = params.userToFriend ? colors.prim : colors.sec
    
    const headerStyle = {
        backgroundColor: pallet.x
    }

    return (
        <View style={styles.occupyAll}>
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
            <View style={styles.formView}>
                <TextBox 
                    value={descricao}
                    onChangeText={setDescricao}
                />
                <CircleButton 
                    dimentions={75}
                    iconSize={30}
                    pallet={pallet}
                    onPress={()=>{}}
                    icon={faCheck}
                />
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
    },
    occupyAll: {
        flex: 1
    },
    formView: {
        flex: 1,
        backgroundColor: colors.white
    }
})