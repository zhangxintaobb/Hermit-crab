import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
// import { Icon } from 'react-native-vector-icons/AntDesign'

export default class Notify extends Component {
    
    render() {
        return (
            <View style={styles.box}>
                <Text> 暂无通知 </Text>
                {/* <Icon name="dingding" /> */}
            </View>
        )
    }
}
const styles=StyleSheet.create({
    box:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#ccc'
    }
})