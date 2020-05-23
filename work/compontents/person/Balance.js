import React, { Component } from 'react'
import { Text, View,StyleSheet, ScrollView,Image } from 'react-native'
const arr=[
    {rmb:'5.99',balance:'6'},
    {rmb:'9.99',balance:'10'},
    {rmb:'19.99',balance:'20'},
    {rmb:'49.99',balance:'50'},
    {rmb:'99.99',balance:'100'},
    {rmb:'199.99',balance:'200'},
]
export default class Balance extends Component {
    render() {
        return (
            <ScrollView style={{backgroundColor:'white'}}>
                <View style={styles.box}>
                    <View style={styles.balance}>
                        <View style={styles.balanceleft}>
                            <Text style={{color:'white'}}>余额(元)></Text>
                            <Text 
                            style={{fontWeight:'bold',fontSize:30,color:'white'}}
                            >0.00</Text>
                        </View>
                        <View style={styles.balanceright}>
                            <Text style={{color:'white'}}>银行卡(张)></Text>
                            <Text 
                            style={{fontWeight:'bold',fontSize:30,color:'white'}}
                            >0</Text>
                        </View>
                    </View>
                    <View style={styles.title}>
                        <Text style={{fontSize:18}}>充值中心</Text>
                    </View>
                    <View style={styles.recharge}>
                        {arr.map((data,i)=>(
                            <View style={styles.item}>
                            <Image style={styles.pic} source={require('../../assets/zxt/Balance/diamond.png')} />
                        <Text style={{fontSize:18,color:'white',margin:2}}>×{data.balance}</Text>
                        <Text style={{color:'white'}}>￥{data.rmb}</Text>
                            </View>
                        ))}
                        
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles=StyleSheet.create({
    box:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    balance:{
        width:'90%',
        height:150,
        backgroundColor:'#5cc9c8',
        borderRadius:20,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'flex-start',
        
    },
    balanceleft:{
        padding:60,
        width:'50%',
        height:'100%',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    balanceright:{
        padding:60,
        width:'50%',
        height:'100%',
        flexDirection:'column',
        alignItems:'flex-start',
        justifyContent:'center'
    },
    title:{
        marginTop:10,
        width:'90%',
        height:40,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    recharge:{
        flexWrap: 'wrap',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'90%'
    },
    item:{
        width:'25%',
        height:130,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#393641',
        borderRadius:10,
        margin:15
    },
    pic:{
        width:'40%',
        height:'40%'
    }
})