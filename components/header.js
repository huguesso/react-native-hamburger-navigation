import React from "react" ;
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Text
}from "react-native" ;
import Icon from "react-native-vector-icons/Feather"; 


export default function Header({navigation,title}){
    return (
        <View style={styles.header}>
            <View style={styles.left} >
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Icon
                        name="align-justify" color="black" size={23}
                        style={{ paddingLeft: 10 }}
                    />
                </TouchableOpacity>
                </View>
                <View style={styles.center} >
                    <Text style={styles.text}>{title}</Text>
                </View>
                <View style={styles.right} >
                    <Icon name="more-vertical" color="black" size={23} style={{ padding: 5 }} />
                </View>
            </View>
    )
}


const styles = StyleSheet.create({
    header: {
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:1,
        borderBottomColor:'#cecece'
      },
      left: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      right: {
        flexDirection: 'row',
      },
      center:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      text:{
          fontSize:18
      }
})