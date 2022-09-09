import { useLayoutEffect, useRef, useState } from "react";
import { StyleSheet, TextInput, Text, TextInputProps, View, ViewStyle } from "react-native";
import { moneyMask } from "../../utils/inputMask";
import CurrencyText from "../preferences/CurrencyText";

interface ICashInputProps extends Omit<TextInputProps, "value" | 'onChangeText'>{
    value: number,
    onChangeText: (v: number) => void,
    style?: ViewStyle,
    color?: string
}

export default function CashInput(props: ICashInputProps){

    const casheValue = props.value;

    const [ inteiro, decimal ]= casheValue.toFixed(2).split(".")

    const inputStyle = {
        ...styles.cashInput,
        color: props.color
    };

    function onChange( inteiro: string, decimal: string ){
        const cashe = moneyMask(`${inteiro},${decimal}`);
        props.onChangeText( cashe );
    }
    

    return (
        <View style={{
            ...styles.inputView,
            ...props.style
        }}>
            <CurrencyText style={inputStyle}/><Text style={inputStyle}></Text>
            <TextInput 
                {...props}
                value={`${inteiro}`}
                onChangeText={ txt => onChange( txt, decimal ) }
                onChange={e => e.target}
                style={inputStyle}
                keyboardType="numeric"
            />
            <Text style={inputStyle}>,</Text>
            <TextInput 
                {...props}
                value={`${decimal}`}
                onChangeText={ txt => onChange( inteiro, txt ) }
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