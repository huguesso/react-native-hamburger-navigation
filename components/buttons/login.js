import React from "react" ;
import {
    View,
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity
}from "react-native" ;

const screenWidth = Dimensions.get('window').width ;

function login({navigation}){
    return (
        <TouchableOpacity 
            style={styles.button} 
            onPress={()=>navigation.navigate('login')}
        >
            <Text style={styles.text}>login</Text>
        </TouchableOpacity>
    )
}

export default login ;

const styles = StyleSheet.create({
    button:{
        backgroundColor:'#FFCE00',
        height:50,
        width:screenWidth/2,
        borderRadius:30,
        justifyContent:"center"

    },
    text:{
        textAlign:"center",
        fontSize:18,
        lineHeight:18
    }
})