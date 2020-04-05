import React from "react" ;
import { createStackNavigator } from '@react-navigation/stack';

import AuthNavigation from "./AuthNavigation" ;
import DrawerNavigation from "./DrawerNavigation" ;

const Stack = createStackNavigator() ;

export default function MainNavigation(){
    return (
        <Stack.Navigator initialRouteName="init" screenOptions={{headerShown:false}}>
            <Stack.Screen 
                name="init"
                component={AuthNavigation}
            />
            <Stack.Screen 
                name="app"
                component={DrawerNavigation}
            />

        </Stack.Navigator>
    ) ;
}