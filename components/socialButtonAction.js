import React from 'react' ;
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity
}from "react-native" ;

const google = require("../assets/images/google.png") ;
const facebook = require("../assets/images/facebook.png") ;
const screenWidth = Dimensions.get('window').width ;

function socialButtonAction(props){
    return (
        <View style={styles.box}>
            <Text style={styles.text}>Sign in with  </Text>
            <View style={styles.social}>
                <TouchableOpacity onPress={()=>console.log('google')}>
                    <Image source={google} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>console.log('facebook')}>
                    <Image source={facebook} style={styles.icon} />
                </TouchableOpacity>
                
            </View>
        </View>
    ) ;
}

export default socialButtonAction ;

const styles = StyleSheet.create({
    box:{
        flex:1,
        flexDirection:"row",
        borderBottomColor:"#cecece",
        borderBottomWidth:2,
        paddingLeft:5,
        paddingRight:5,
        alignItems:"flex-end",
        paddingBottom:10,
        width:0.5*screenWidth,
        shadowColor: '#000'
        

    },
    text:{
        fontSize:19 ,
        fontWeight:"300"
    },
    social:{
        paddingLeft:5,
        flex:1,
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    icon:{
        marginLeft:5,
        width:30,
        height:30
    }
})