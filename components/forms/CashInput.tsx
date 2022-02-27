import { useLayoutEffect, useState } from "react";
import { StyleSheet, TextInput, Text, TextInputProps, View, ViewStyle } from "react-native";
import { colors } from "../../design/colors";
import { formatMoneyReais } from "../../utils/format";
import { moneyMask } from "../../utils/inputMask";

interface ICashInputProps extends Omit<TextInputProps, "value" | 'onChangeText'>{
    value: number,
    onChangeText: (v: number) => void,
    style?: ViewStyle,
    color?: string
}

export default function CashInput(props: ICashInputProps){

    const [ int, setInt ] = useState("0");
    const [ int2, setInt2 ] = useState("00");

    const [ inteiro, setInteiro ] = useState("0");
    const [ decimal, setDecimal ] = useState("00");

    const inputStyle = {
        ...styles.cashInput,
        color: props.color
    };
    
    useLayoutEffect(() => {
        onChange( int, int2 )
    }, [int, int2]);

    function onChange( inteiro: string, decimal: string ){
        const cashe = moneyMask(`${inteiro},${decimal}`);
        props.onChangeText( cashe );
        const [ i, d ] = cashe.toFixed(2).split(".");
        setInteiro(i);
        setDecimal(d);
        setInt(i);
        setInt2(d);
    }

    return (
        <View style={{
            ...styles.inputView,
            ...props.style
        }}>
            <Text style={inputStyle}>R$ </Text>
            <TextInput 
                {...props}
                value={`${inteiro}`}
                onChangeText={ setInt }
                style={inputStyle}
                keyboardType="numeric"
            />
            <Text style={inputStyle}>,</Text>
            <TextInput 
                {...props}
                value={`${decimal}`}
                onChangeText={ setInt2 }
                style={inputStyle}
                keyboardType="numeric"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cashInput: {
        fontSize: 50,
        fontWeight: "bold"
    },
    inputView: {
        flexDirection: 'row'
    }
})