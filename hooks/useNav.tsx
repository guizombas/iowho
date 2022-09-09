import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { useNavigation, NavigationHelpers, ParamListBase } from "@react-navigation/native";

export function useNav(){
    return useNavigation<NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>>()
}