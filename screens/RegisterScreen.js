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


class RegisterScreen extends Component{
    constructor(props){
        super(props);
        this.state ={
            user:{
                name:'',
                subname:'',
                email:'',
                phone:'',
                password:'',
                confirmpassword:''
            },
        }
    }
    render(){
        const {navigation} = this.props ;
        const {user} = this.state ;
        return (
            <View style={styles.container}>
            <View style={styles.actionButtonSocial}>
                <SocialButtonAction />
                <Text style={{paddingTop:15,paddingBottom:15}}>Or</Text>
            </View>
            <View style={styles.form}>
                <View style={styles.formGroup}>
                    <TextInput
                        value={user.name}
                        onChangeText={(name) => this.setState({ user:{name:name} })}
                        placeholder={'name'}
                        style={styles.inputgroup}
                    />
                    <TextInput
                        value={user.subname}
                        onChangeText={(subname) => this.setState({ user:{subname:subname} })}
                        placeholder={'subname'}
                        style={[styles.inputgroup,{marginLeft:25}]}
                    />
                </View>
                <TextInput
                    value={user.email}
                    onChangeText={(email) => this.setState({ user:{email:email} })}
                    placeholder={'email'}
                    style={styles.input}
                />
                <TextInput
                    value={user.password}
                    onChangeText={(password) => this.setState({ user:{password:password} })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                style={styles.input}
                />
                <TextInput
                    value={user.confirmpassword}
                    onChangeText={(password) => this.setState({ user:{confirmpassword:password} })}
                    placeholder={'Confirm your Password'}
                    secureTextEntry={true}
                style={styles.input}
                />
                {/* login call api action */}
                <TouchableOpacity 
                    style={styles.button} 
                    onPress={()=>console.log('call api/register')}
                >
                    <Text style={styles.text}>Register</Text>
                </TouchableOpacity>
                
            </View>
            
            
        </View>
        )
    }
}

export default RegisterScreen ;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    actionButtonSocial:{
        flex:1,
        alignItems:"center",
        
        
    },
    form:{
        flex:4,
        alignItems:"center",
        justifyContent:"center",
        marginTop:5
    },
    formGroup:{
        flexDirection:"row",
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
    inputgroup:{
        width: 0.34*screenWidth,
        height: 44,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 10,
    },
    button:{
        backgroundColor:'#FFCE00',
        height:50,
        width:0.75*screenWidth,
        borderRadius:30,
        justifyContent:"center",
        position:"relative",
        marginTop:10

    },
    text:{
        textAlign:"center",
        fontSize:18,
        lineHeight:18
    }

})