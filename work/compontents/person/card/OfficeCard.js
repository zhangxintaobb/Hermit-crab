import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity } from 'react-native'
import { Left, Root } from 'native-base'
import { Actions } from 'react-native-router-flux'

export default class OfficeCard extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <View style={styles.box}>
                <View style={styles.left}>
                    <View style={{
                        
                            flexDirection:'row',
                            alignItems:'center',
                            justifyContent:'center'
                            }}>
                                <Text style={{
                                    color:'yellow',
                                }}>￥</Text>
                                <Text style={{
                                     color:'yellow',
                                     fontWeight:'bold',
                                    fontSize:24
                                }}>{this.props.carddata.money}</Text>
                                
                            </View>
                    <Text
                     style={{
                        color:'yellow',
                    }}
                    >优惠券</Text>
                </View>
                <View style={styles.centre}>
                <Text>【办公优惠】  {this.props.carddata.money}元优惠券</Text>
                    <Text>{this.props.carddata.date} 到期</Text>
                <Text>{''+this.props.carddata.limit}</Text>
                </View>
                <View style={styles.right}>
                    <TouchableOpacity 
                    style={styles.use}
                    onPress={Actions.find}>
                        <Text>立即使用</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    box:{
        width:'100%',
        height:80,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:"white",
        borderRadius:8,
        marginBottom:10
    },
    left:{
        width:'20%',
        height:'100%',
        flexDirection:'column',
        alignItems:"center",
        justifyContent:'center'
    },
    centre:{
        width:'60%',
        height:'100%',
        paddingLeft:40,
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'space-evenly'
    },
    right:{
        width:'20%',
        height:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    use:{
        width: '70%',
        height: 25,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:13,
    }
})