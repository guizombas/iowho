import { FlatList, StyleSheet, Text } from "react-native";
import DividaInfo from "../components/cards/DividaInfo";
import { Mock_Dividas } from "../mocks/DividasInfo";

export default function Home(){
    const lstDividas = Mock_Dividas;

    return (
        <FlatList 
            data={lstDividas} 
            renderItem={d=>(
                <DividaInfo 
                    {...d.item} 
                    last={(lstDividas.length-1) === d.index}
                    key={d.item.pessoa.id}
                />
            )}
            keyExtractor={d=>String(d.pessoa.id)}
            style={styles.screenBody}
        />
        
    )
}

const styles = StyleSheet.create({
    screenBody: {
        flex: 1,
    }
})