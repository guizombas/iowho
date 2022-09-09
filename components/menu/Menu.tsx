import { faHome, faPlus, faUsers } from "@fortawesome/free-solid-svg-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { StyleSheet, View } from "react-native";
import { colors } from "../../design/colors";
import CircleButton from "../interaction/buttons/CircleButton";
import IconButton from "../interaction/buttons/IconButton";

export default function Menu(props: BottomTabBarProps){
    
    const lastHistory = props.state.history[ props.state.history.length - 1 ];
    const currentRoute = props.state.routes.find( r => r.key === lastHistory?.key )

    const shouldShow = currentRoute?.name !== "Transacao" && currentRoute?.name !== "PessoaSelector"
    
    return (
        <View style={shouldShow ? styles.menuContainer : {
            display: "none"
        }}>
            <IconButton
                icon={faHome}
                onPress={()=>{
                    props.navigation.navigate("Home");
                }}
                style={styles.menuButton}
                iconSize={25}

                selected={currentRoute?.name === "Home"}
                selectedColor={colors.prim.x}
            />

            <CircleButton 
                icon={faPlus}
                dimentions={100}
                pallet={colors.prim}
                onPress={()=>{
                    props.navigation.navigate("Transacao", {});
                }}
                iconSize={30}
            />

            <IconButton
                icon={faUsers}
                onPress={()=>{
                    props.navigation.navigate("Pessoas");
                }}
                style={styles.menuButton}
                iconSize={25}

                selected={currentRoute?.name === "Pessoas"}
                selectedColor={colors.prim.x}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer:{
        height: 65,
        backgroundColor: colors.white,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',

        borderTopColor: colors.gray.light,
        borderTopWidth: .5,
        borderStyle: "solid"
    },
    menuButton:{
        padding: 20
    }
})