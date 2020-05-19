import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { H3 } from 'native-base'

export default class About extends Component {
    render() {
        return (
            <View style={styles.box}>
                <H3> 关于寄居蟹 </H3>
                <Text style={styles.font}>
                    每年全国高校有大量学生面临实习、就业，
                    对于考研的学生而言，在学院中不容易找到座位，
                    并且有许多外界环境的干扰，是考研路上的一个不小的阻碍。
                    对于一些初入社会并且想创业的年轻人来说，
                    找到合适且可以短时间租赁的办公室，难度确实不小，
                    现有市面上的租写字楼软件大多都是大面积的租赁，
                    很少有针对学生这一群体的应用出现。
                    寄居蟹就是为解决这些同学的问题而存在的。
                </Text>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    box:{
        width:'100%',
        padding:'10%',
        height:'100%',
        alignItems:'center',
        backgroundColor:'white',
        flexDirection:'column'
    },
    font:{
        marginTop:20,
        fontSize:18,
        fontWeight:'bold'
    }
})