import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CashInput from "../components/forms/CashInput";
import PessoaSelector from "../components/forms/PessoaSelector";
import TextBox from "../components/forms/TextBox";
import CircleButton from "../components/interaction/buttons/CircleButton";
import LabelButton from "../components/interaction/buttons/LabelButton";
import TransacaoHeader from "../components/transacao/TransacaoHeader";
import { colors } from "../design/colors";

const divideByNumber = [2,3,5];

export interface ITransacaoScreenProps{
    userToFriend: boolean,
    idPessoa: number | undefined,
}

export default function Transacao(){

    const params = useRoute().params as ITransacaoScreenProps;

    const [ cashValue, setCashValue ] = useState(0);
    const [ descricao, setDescricao ] = useState("");
    const person = params.idPessoa;

    const validated = Boolean(cashValue && descricao && person);
    
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
                <View style={styles.labelButtonsWrapper}>
                    <LabelButton 
                                pallet={colors.info} 
                                onPress={()=>setCashValue(0)}
                            >
                                {" X "}
                            </LabelButton>
                    {
                        divideByNumber.map((divideBy) => (
                            <LabelButton 
                                key={divideBy} 
                                pallet={colors.info} 
                                style={{
                                    marginRight: 10
                                }}
                                onPress={()=>setCashValue(cashValue / divideBy)}
                            >
                                {`÷ ${divideBy}`}
                            </LabelButton>
                        ))
                    }
                </View>
                <View style={{
                    marginHorizontal: 20,
                    flex: 1
                }}>
                    <PessoaSelector 
                        value={person}
                        label="Pessoa: "
                    />
                    <TextBox 
                        value={descricao}
                        onChangeText={setDescricao}
                        label="Descrição:"
                        placeholder="Digite a descrição da dívida registrada..."
                        wrapperStyles={{
                            marginTop: 10
                        }}
                    />
                </View>
                <CircleButton 
                    dimentions={75}
                    iconSize={30}
                    pallet={pallet}
                    onPress={()=>{}}
                    disabled={!validated}
                    style={{
                        margin: 10
                    }}
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
        backgroundColor: "#ffffff",
    },
    labelButtonsWrapper: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        flexDirection: "row-reverse",
    }
})