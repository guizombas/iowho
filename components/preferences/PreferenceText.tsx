import { Text, TextProps } from "react-native";
import { usePreferences } from "../../contexts/preferences";
import { textWithLang, TText } from "../../design/preferences";

interface IPreferenceTextProps extends TextProps{
    text: TText,
    before?: string
    after?: string,
}

export default function PreferenceText(props: IPreferenceTextProps){
    const { lang } = usePreferences();
    const { text, before, after, ...textProps } = props;
    const langText = textWithLang[text][lang];
    const completeText = `${before??""}${langText}${after??""}`;
    
    return (
        <Text {...textProps}>{completeText}</Text>
    )
}