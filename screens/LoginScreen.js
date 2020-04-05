import React ,{Component} from "react" ;
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TextInput,
    TouchableOpacity
}from "react-native" ;

import SocialButtonAction from "../components/socialButtonAction" ;

const screenWidth = Dimensions.get('window').width ;


class LoginScreen extends Component{
    constructor(props){
        super(props) ;
        this.state ={
            email:"",
            password:""
        }
    }
    render(){
        const {email,password} = this.state ;
        const {navigation} = this.props ;
        return (
            <View style={styles.container}>
                <View style={styles.actionButtonSocial}>
                    <SocialButtonAction />
                    <Text style={{paddingTop:15}}>Or</Text>
                </View>
                <View style={styles.form}>
                    <TextInput
                        value={email}
                        onChangeText={(username) => this.setState({ username })}
                        placeholder={'email'}
                        style={styles.input}
                    />
                    <TextInput
                        value={password}
                        onChangeText={(password) => this.setState({ password })}
                        placeholder={'Password'}
                        secureTextEntry={true}
                    style={styles.input}
                    />
                </View>
                {/* login call api action */}
                <View style={styles.bottom}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={()=>navigation.navigate('app')}
                    >
                        <Text style={styles.text}>login</Text>
                    </TouchableOpacity>
                    {/* forgot password */}
                    <TouchableOpacity 
                        onPress={()=>console.log('forgot route')}
                    >
                        <Text style={[styles.text,{paddingTop:8}]}>Forget password ?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default LoginScreen ;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    actionButtonSocial:{
        flex:1,
        alignItems:"center",
        
        
    },
    form:{
        flex:3,
        alignItems:"center",
        justifyContent:"center"
    },
    input:{
        width: 0.75*screenWidth,
        height: 44,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 20,
    },
    bottom:{
        flex:1,
        alignItems:"center"
    },
    button:{
        backgroundColor:'#FFCE00',
        height:50,
        width:0.75*screenWidth,
        borderRadius:30,
        justifyContent:"center"

    },
    text:{
        textAlign:"center",
        fontSize:18,
        lineHeight:18
    }

})