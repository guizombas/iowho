import { FlatList, StyleSheet, Text, View } from "react-native";
import PessoaInfo from "../components/cards/PessoaInfo";
import { Mock_Pessoas } from "../mocks/PessoasInfo";

export default function Pessoas(){

    const lstPessoas = Mock_Pessoas;

    return (
        <FlatList 
            data={lstPessoas} 
            renderItem={p=>(
                <PessoaInfo 
                    {...p.item} 
                    last={(lstPessoas.length-1) === p.index}
                    key={p.item.id}
                />
            )}
            style={styles.screenBody}
        />
        
    )
}

const styles = StyleSheet.create({
    screenBody: {
        flex: 1,
    }
})