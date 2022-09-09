import { Pressable, StyleSheet, Text } from "react-native";
import { colors } from "../../design/colors";
import { IPessoaInfo } from "../../interfaces/Pessoa/IPessoaInfo";

interface IPessoaSelectableProps extends IPessoaInfo{
    onClick(id: number): void
}

export default function PessoaSelectable(props: IPessoaSelectableProps){
    
    function handleSelectableClick(){
        props.onClick(props.id);
    }

    return (
        <Pressable style={button => ({
            ...styles.pessoaSelectable,
            backgroundColor: button.pressed ? colors.gray.light : undefined
        })} onPress={handleSelectableClick}>
            <Text style={styles.font}>{props.nome}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    pessoaSelectable:{
        padding: 20,
        alignItems: 'center',
        borderBottomColor: "#eaeaea",
        borderBottomWidth: 1,
        flexDirection: 'row',
    },
    font: {
        color: colors.gray.dark
    },
    button: {
        borderRadius: 5,
    }
})