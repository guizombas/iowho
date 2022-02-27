import { Text, TextProps } from "react-native";
import { usePreferences } from "../../contexts/preferences";
import { formatDate } from "../../utils/format";

interface IDateProps extends TextProps{
    children: Date
}

export default function DateText( props: IDateProps ){
    const { date } = usePreferences();
    const { children, ...textProps } = props;

    const dateText = formatDate(children, date);
    
    return (
        <Text {...textProps}>{dateText}</Text>
    )
}