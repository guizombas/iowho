import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { colors } from "../../design/colors";
import IconButton from "../interaction/buttons/IconButton";
import PreferenceText from "../preferences/PreferenceText";

interface ITransacaoHeaderProps{
    userToFriend: boolean
}

export default function TransacaoHeader(props: ITransacaoHeaderProps){

    const { setParams, goBack } = useNavigation();
    const { params } = useRoute();

    const pallet = props.userToFriend ? colors.prim : colors.sec;
    const linkStyle = {
        ...styles.link,
        color: pallet.text,
    }

    return (
        <View style={styles.header}>
            <IconButton
                icon={faChevronLeft}
                onPress={goBack}
                iconColor={pallet.text}
                iconSize={20}
                style={styles.icon}
                backgroundColorPressed={pallet.light}
            />
            <View style={styles.linkDiv}>
                <Pressable
                    onPress={()=>{
                        setParams({
                            ...params,
                            userToFriend: true
                        } as never)
                    }}
                    style={button => ({
                        backgroundColor: button.pressed ? pallet.light : undefined 
                    })}
                >
                    <PreferenceText 
                        style={{
                            ...linkStyle,
                            borderBottomColor: props.userToFriend ? pallet.text : undefined,
                            borderBottomWidth: props.userToFriend ? 1 : 0,
                            borderStyle: props.userToFriend ? "solid" : undefined,
                        }}
                        text="Emprestar"
                    />
                </Pressable>
                <Pressable
                    onPress={()=>{
                        setParams({
                            ...params,
                            userToFriend: false
                        } as never)
                    }}
                    style={button => ({
                        backgroundColor: button.pressed ? pallet.light : undefined 
                    })}
                >
                    <PreferenceText 
                        style={{
                            ...linkStyle,
                            borderBottomColor: props.userToFriend ? undefined : pallet.text,
                            borderBottomWidth: props.userToFriend ? 0 : 1,
                            borderStyle: props.userToFriend ? undefined : "solid" ,
                        }}
                        text="Pegar Emprestado"
                    /> 
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: "center",
    },
    linkDiv: {
        flexDirection: 'row',
        flex: 1,
        alignItems: "center",
        justifyContent: "space-evenly"
    },
    link: {
        fontWeight: "bold",
        padding: 10
    },
    icon: {
        padding: 10
    }
})