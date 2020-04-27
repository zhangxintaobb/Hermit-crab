import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Dimensions, ScrollView, Image, SafeAreaView } from 'react-native'
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button';
import { black } from 'color-name';

export default class index extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <View style={styles.top}>
                    <Text style={{color:'#fff'}}>消息列表</Text>
                </View>

                <ScrollView>
                    <View  style={{
                        flexDirection:'row',
                        justifyContent:'space-evenly',
                        flexWrap:'wrap',
                        paddingTop:20,
                        width:'100%',
                        height: 650
                    }}>
                        <View style={{
                            flexDirection:'column',
                            justifyContent:'center',
                            flexWrap:'wrap',
                        }}>
                            <View style={styles.pic}><Image style={{height:90,width:90}} source={require('../../assets/zxt/Login/person.png')} /></View>
                            <View style={styles.pic}><Image style={{height:90,width:90}} source={require('../../assets/zxt/Login/person.png')} /></View>
                            <View style={styles.pic}><Image style={{height:90,width:90}} source={require('../../assets/zxt/Login/person.png')} /></View>
                            <View style={styles.pic}><Image style={{height:90,width:90}} source={require('../../assets/zxt/Login/person.png')} /></View>
                            <View style={styles.pic}><Image style={{height:90,width:90}} source={require('../../assets/zxt/Login/person.png')} /></View>
                            <View style={styles.pic}><Image style={{height:90,width:90}} source={require('../../assets/zxt/Login/person.png')} /></View>
                        </View>
                        <View style={{
                            flexDirection:'column',
                            justifyContent:'space-around',
                            flexWrap:'wrap',
                            height: 600
                        }}>
                            <View>
                                <Text style={{fontSize:25}}>官方客服1</Text>
                                <Text style={{color:'#ccc'}}>您想咨询什么问题？                                             --12:56</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:25}}>官方客服2</Text>
                                <Text style={{color:'#ccc'}}>您想咨询什么问题？                                             --12:56</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:25}}>官方客服3</Text>
                                <Text style={{color:'#ccc'}}>您想咨询什么问题？                                             --12:56</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:25}}>官方客服4</Text>
                                <Text style={{color:'#ccc'}}>您想咨询什么问题？                                             --12:56</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:25}}>官方客服5</Text>
                                <Text style={{color:'#ccc'}}>您想咨询什么问题？                                             --12:56</Text>
                            </View>
                            <View>
                                <Text style={{fontSize:25}}>官方客服6</Text>
                                <Text style={{color:'#ccc'}}>您想咨询什么问题？                                             --12:56</Text>
                            </View>
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
        marginLeft:10,
        backgroundColor:'#cccccc',
        paddingTop:5,
        backgroundColor:'white',
        width: '90%',
    },
    pic:{
        marginTop:10
    }
})