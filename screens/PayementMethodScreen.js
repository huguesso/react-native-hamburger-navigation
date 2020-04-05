import React from "react" ;
import{ 
    View,
    Text,
    Platform,
    StyleSheet 
} from "react-native";
import Constants from 'expo-constants';

import Header from "../components/header" ;

class PayementMethodScreen extends React.Component{
    constructor(props){
        super(props) ;
    }

    render(){
        const  {navigation} = this.props ;
        return (
            <View style={styles.container}>
                <Header navigation={navigation} title="Payement"  />
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Text>Payement methods  screen </Text>
                </View>
            </View>
        )
    }
}

export default PayementMethodScreen ;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
})