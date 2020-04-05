import React ,{Component} from "react" ;
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    StyleSheet
}from "react-native" ;

import Login from "../components/buttons/login" ;

const logo = require('../assets/images/logo.png') ;

class WelcomeScreen extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const {navigation} =this.props ;
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image source={logo} style={styles.logo} />
                </View>
                <View style={styles.bottomContainer}>
                    <Login navigation={navigation} />
                    <View style={styles.actions}>
                        <Text style={styles.text}> 
                            Not have account  
                        </Text>
                        <TouchableOpacity 
                            onPress={()=>navigation.navigate('register')}
                        >
                            <Text style={[styles.text,{fontSize:14}]}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default WelcomeScreen ;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#076D9F',
    },
    logoContainer:{
        flex:3,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        height:300,
        width:350,
    },
    bottomContainer:{
        flex:1,
        alignItems:"center"
    },
    actions:{
        flex:1,
        flexDirection:"row",
        marginTop:2
    },
    text:{
        color:"#fff" ,
        padding:5
    }
})