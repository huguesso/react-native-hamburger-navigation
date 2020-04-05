import React from "react" ;
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "react-native-vector-icons/Feather"; 

import HomeScreen from "../screens/HomeScreen" ;
import SettingScreen from "../screens/SettingScreen" ;
import PayementMethodScreen from "../screens/PayementMethodScreen" ;

const Drawer = createDrawerNavigator() ;

export default function DrawerNavigation(){
    return (
        <Drawer.Navigator initialRouteName="home">
            <Drawer.Screen 
                name="home" 
                component={HomeScreen} 
                options={{
                    drawerIcon:()=> <Icon name="home" size={30} />
                }}
            />
            <Drawer.Screen 
                name="payements" 
                component={PayementMethodScreen} 
                options={{
                    drawerIcon:()=> <Icon name="credit-card" size={30} />
                }}
            />
            <Drawer.Screen 
                name="settings" 
                component={SettingScreen} 
                options={{
                    drawerIcon:()=> <Icon name="settings" size={30} />
                }}
            />
        </Drawer.Navigator>
    ) ;
}