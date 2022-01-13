//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, NavigationContext, NavigationRouteContext } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home';
import Pessoas from './screens/Pessoas';
import Transacao from './screens/Transacao';
import Menu from './components/menu/Menu';
import { colors } from './design/colors';
import { StatusBar } from 'expo-status-bar';

const BTab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
        <NavigationContainer>
          <BTab.Navigator
            tabBar={ props => <Menu {...props}/>}
            screenOptions={{
              headerStyle: {
                backgroundColor: colors.prim.x,
              },
              headerTintColor: colors.prim.text
            }}
          >
            <BTab.Screen 
              name="Home" 
              component={Home}
            />
            <BTab.Screen 
              name="Transacao" 
              options={{
                headerShown: false,
                tabBarStyle: {
                  display: "none"
                }
              }}
              component={Transacao} 
              initialParams={{
                userToFriend: false,
              }}
            />
            <BTab.Screen 
              name="Pessoas" 
              component={Pessoas}
            />
          </BTab.Navigator>

        </NavigationContainer>

        <StatusBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray.light
  },
});
