import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import PessoaSelectable from "../components/cards/PessoaSelectable";
import { colors } from "../design/colors";
import { useNav } from "../hooks/useNav";
import { Mock_Pessoas } from "../mocks/PessoasInfo";

export default function PessoaSelectorScreen(){
    const { navigate, getState } = useNav();
    const lstPessoas = Mock_Pessoas;

    function handleCreatePessoaClick(){
        
    }

    function handlePessoaClick(id: number){
        const oldParams = getState().routes.find(r=>r.name==="Transacao")?.params;
        navigate("Transacao", {
            ...oldParams,
            idPessoa: id
        })
    }

    return (
        <View style={styles.screenBody}>
            <Pressable onPress={handleCreatePessoaClick} style={ button => ({
                ...styles.addPessoaButton,
                backgroundColor: button.pressed ? colors.gray.light : undefined
            })}>
                <FontAwesomeIcon icon={faPlus} style={styles.font}/>
                <Text style={{...styles.font, marginLeft: 5}}>Adicionar pessoa</Text>
            </Pressable>
            <FlatList 
                data={lstPessoas} 
                renderItem={p=>(
                    <PessoaSelectable 
                        {...p.item} 
                        key={p.item.id}
                        onClick={handlePessoaClick}
                    />
                )}
                style={styles.screenBody}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screenBody: {
        flex: 1,
        backgroundColor: colors.white
    },
    addPessoaButton: {
        flexDirection: 'row',
        padding: 20,
        alignItems: 'center',
        borderBottomColor: "#eaeaea",
        borderBottomWidth: 1,
    },
    font: {
        color: colors.gray.dark
    }
})