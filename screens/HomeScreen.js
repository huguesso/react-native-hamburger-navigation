import React from "react" ;
import{ 
    View,
    Text,
    Platform,
    StyleSheet 
} from "react-native";
import Constants from 'expo-constants';

import Header from "../components/header" ;

class HomeScreen extends React.Component{
    constructor(props){
        super(props) ;
    }

    render(){
        const  {navigation} = this.props ;
        return (
            <View style={styles.container}>
                <Header navigation={navigation} title="Home"  />
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <Text>Home screen </Text>
                </View>
            </View>
        )
    }
}

export default HomeScreen ;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
    },
})