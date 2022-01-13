import { RouteProp, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TransacaoHeader from "../components/transacao/TransacaoHeader";
import { colors } from "../design/colors";

interface ITransacaoScreenProps{
    userToFriend: boolean,
}

export default function Transacao(){

    const params = useRoute().params as ITransacaoScreenProps;
    
    const headerStyle = {
        backgroundColor: params.userToFriend ? colors.prim.x : colors.sec.x
    }

    return (
        <View>
            <View style={{
                ...styles.header,
                ...headerStyle
            }}>
                <TransacaoHeader userToFriend={params.userToFriend}/>
                <Text>R$ 0,00</Text>
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
    }
})