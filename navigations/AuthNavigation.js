import React , {Component} from "react" ;
import { createStackNavigator } from '@react-navigation/stack';

import WelcomeScreen from "../screens/welcomeScreen";
import LoginScreen from "../screens/LoginScreen" ;
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createStackNavigator() ;

export default class AuthNavigation extends Component{

    render(){
        return (
            <Stack.Navigator 
                initialRouteName="welcome"
                screenOptions={{ headerTitleAlign:"center"}}
            >
                <Stack.Screen 
                    name="welcome"
                    component={WelcomeScreen}
                    options={{
                        headerShown:false
                    }}
                />
                <Stack.Screen 
                    name="login"
                    component={LoginScreen}
                    options={{
                        title:"Sign in"
                    }}
                />
                <Stack.Screen 
                    name="register"
                    component={RegisterScreen}
                    options={{
                        title:"Sign Up"
                    }}
                />
            </Stack.Navigator>
        )
    }
}