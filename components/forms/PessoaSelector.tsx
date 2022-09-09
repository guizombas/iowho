import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { NavigationHelpers, ParamListBase, useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View, ViewStyle } from "react-native";
import { colors } from "../../design/colors";
import { useNav } from "../../hooks/useNav";
import { Mock_Pessoas } from "../../mocks/PessoasInfo";

interface IPersonSelectorProps{
    value: number | undefined,
    label?: string,
    wrapperStyles?: ViewStyle,
    color?: string
}

export default function PessoaSelector(props: IPersonSelectorProps){

    const { navigate } = useNav();

    const selectorStyles = {
        ...styles.selectorBox,
        borderBottomColor: props.color ?? colors.info.dark,
    }
    const iconStyles = {
        color: props.color ?? colors.info.dark,
        marginHorizontal: 20
    }

    const selectedPerson = Mock_Pessoas.find(p => p.id === props.value)?.nome ?? "";

    function handlePersonSelectorBoxPress(){
        navigate("PessoaSelector");
    }
    
    return (
        <View style={{...props.wrapperStyles}}>
            <Text style={styles.label}>{props.label}</Text>
            <Pressable 
                {...props}
                style={button => ({
                    ...selectorStyles,
                    backgroundColor: button.pressed ? "#e3e3e3" : "#f0f0f0",
                })}
                onPress={handlePersonSelectorBoxPress}
            >
                <Text style={{
                    color: props.color ?? colors.info.dark
                }}>{selectedPerson}</Text>
                <FontAwesomeIcon icon={faChevronDown} style={iconStyles}/>
            </Pressable>
        </View>
        
    )
}


const styles = StyleSheet.create({
    selectorBox: {
        borderWidth: 1,
        height: 50,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        borderTopWidth: 0,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomWidth: 2,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        paddingLeft: 20,

    },
    label: {
        fontWeight: "bold",
        marginBottom: 5,
        marginLeft: 5,
        fontSize: 18
    }
})