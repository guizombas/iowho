import { Text, TextProps } from "react-native";
import { usePreferences } from "../../contexts/preferences";
import { currencySymbols } from "../../design/preferences";
import { formatMoneyReais } from "../../utils/format";

interface ICurrencyTextProps extends TextProps{
    children?: number
}

export default function CurrencyText( props: ICurrencyTextProps ){
    const { currency } = usePreferences();
    const { children, ...textProps } = props;

    const currencySymbol = currencySymbols[currency];
    const currencyText = children ? formatMoneyReais(children, currencySymbol) : currencySymbol;
    
    return (
        <Text {...textProps}>{currencyText}</Text>
    )
}