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

                <ScrollView>
                    <View  style={{
                        flexDirection:'column',
                        justifyContent:'center',
                        flexWrap:'wrap',
                        marginTop:20,
                        width:'100%',
                    }}>
                        <View style={styles.box}>
                            <Image style={{width:70,height:70}} source={require('../../assets/zxt/Login/person.png')} />
                            <Text>官方客服1</Text>
                            <Text>您想咨询什么问题？                                  --12:56</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={{width:70,height:70}} source={require('../../assets/zxt/Login/person.png')} />
                            <Text>官方客服2</Text>
                            <Text>您想咨询什么问题？                                  --12:56</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={{width:70,height:70}} source={require('../../assets/zxt/Login/person.png')} />
                            <Text>官方客服3</Text>
                            <Text>您想咨询什么问题？                                  --12:56</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={{width:70,height:70}} source={require('../../assets/zxt/Login/person.png')} />
                            <Text>官方客服4</Text>
                            <Text>您想咨询什么问题？                                  --12:56</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={{width:70,height:70}} source={require('../../assets/zxt/Login/person.png')} />
                            <Text>官方客服5</Text>
                            <Text>您想咨询什么问题？                                  --12:56</Text>
                        </View>
                        <View style={styles.box}>
                            <Image style={{width:70,height:70}} source={require('../../assets/zxt/Login/person.png')} />
                            <Text>官方客服6</Text>
                            <Text>您想咨询什么问题？                                  --12:56</Text>
                        </View>
                    </View>
                </ScrollView>
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
    },
    box:{
        marginLeft:10
    }
})