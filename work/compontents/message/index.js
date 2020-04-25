import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Dimensions, ScrollView, Image, SafeAreaView } from 'react-native'
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button';
import { black } from 'color-name';

export default class index extends Component {
    render() {
        return (
            <View>
                <View style={styles.top}>
                    <Text style={{color:'#fff'}}>消息列表</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    top:{
        height:70,
        width:'100%',
        backgroundColor:'#33CC99',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize:50
    },
})