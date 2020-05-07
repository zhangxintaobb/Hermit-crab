import React, { Component } from 'react'
import { Text, View,StyleSheet, TouchableOpacity, TextInput } from 'react-native'


export default class EmailRevise extends Component {
   
    render() {
        return (
            <View style={styles.box}>
                <View style={styles.inputbox}>
                    <Text>邮箱</Text>
                    <TextInput 
                    style={styles.input}
                
                    onChangeText={this.userhandle} />
                </View>
                <TouchableOpacity style={styles.submit} >
                    <Text>
                        完成
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    box:{
        width:'100%',
        height:'100%',
        flexDirection:'column',
        alignItems:'center'
    },
    inputbox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        width:'100%',
        height:'8%',
        paddingLeft:25
    },
    submit:{ 
        marginTop: 40,
        width: '60%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "yellow"
    },
        input:{
            marginTop:2,
            height:'80%',
            width:'100%',
        }
        
})
