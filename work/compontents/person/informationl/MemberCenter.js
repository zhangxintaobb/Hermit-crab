import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,TouchableHighlight, AsyncStorage,DeviceEventEmitter, Image, Dimensions ,ScrollView} from 'react-native'

const { width, height } = Dimensions.get('window')

export default class MemberCenter extends Component {
    
    render() {
        return (
            <View>
                <View style={styles.title}><Text style={{ color: '#fff', fontSize: 20 }}>会员中心</Text></View>
                <View><Image style={{height:250,width:width}} source={require('../../../assets/qjx/viptop.png')} /></View>
                
                <TouchableOpacity style={styles.kick}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>开通会员</Text>
                </TouchableOpacity>

                <ScrollView>

          <View  style={{
            flexDirection:'row',
            justifyContent:'space-around',
            flexWrap:'wrap'
          
          }}>
          <View style={styles.box}>
          <Image style={{width:210,height:210}} source={require('../../../assets/qjx/vip.jpg')} />
          <Text style={{color:'grey',marginTop:10,marginLeft:10}}>会员福利</Text>
          <Text style={{color:'red',marginTop:10,marginLeft:10}}>福利下周上新</Text>
          </View>
          <View style={styles.box}>
          <Image style={{width:210,height:210}} source={require('../../../assets/qjx/vip.jpg')} />
          <Text style={{color:'grey',marginTop:10,marginLeft:10}}>会员礼品卡</Text>
          <Text style={{color:'red',marginTop:10,marginLeft:10}}>买会员送好友</Text>
          </View>
          <View style={styles.box}>
          <Image style={{width:210,height:210}} source={require('../../../assets/qjx/vip.jpg')} />
          <Text style={{color:'grey',marginTop:10,marginLeft:10}}>礼品红包</Text>
          <Text style={{color:'red',marginTop:10,marginLeft:10}}>抵价折扣券</Text>
          </View>
          
          <View style={styles.box}>
          <Image style={{width:210,height:210}} source={require('../../../assets/qjx/vip.jpg')} />
          <Text style={{color:'grey',marginTop:10,marginLeft:10}}>会员代充</Text>
          <Text style={{color:'red',marginTop:10,marginLeft:10}}>预租赁</Text>
          </View>
          <View style={styles.box}>
          <Image style={{width:210,height:210}} source={require('../../../assets/qjx/vip.jpg')} />
          <Text style={{color:'grey',marginTop:10,marginLeft:10}}>推荐有礼</Text>
          <Text style={{color:'red',marginTop:10,marginLeft:10}}>推荐好友下载有礼</Text>
          </View>
          <View style={styles.box}>
          <Image style={{width:210,height:210}} source={require('../../../assets/qjx/vip.jpg')} />
          <Text style={{color:'grey',marginTop:10,marginLeft:10}}>会员特权</Text>
          <Text style={{color:'red',marginTop:10,marginLeft:10}}>vip会员通道</Text>
          </View>
          </View>
        </ScrollView>

                <View><Image style={{height:250,width:width}} source={require('../../../assets/qjx/vipmiddle.png')} /></View>
                
                <TouchableOpacity
                    style={styles.submit}
                    onPress={() => {
                        this.props.navigation.navigate('person');
                        DeviceEventEmitter.emit("EventType");
                    }}>
                    <Text>返回</Text>
                </TouchableOpacity>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    submit: {
        marginTop: 50,
        width: '60%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 80,
        backgroundColor: "#009688",
        marginLeft: '20%'
    },
    title:{
        height: 50,
        width: width,
        backgroundColor:'#33CC99',
        justifyContent: 'center',
        alignItems: 'center',
    },
    kick:{
        backgroundColor: '#33CC99',
        width: '90%',
        height: 50,
        marginLeft: '5%',
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    box:{
        // width:100,
        width:225,
        margin:5,
        height:300,
        borderColor:'black',
        backgroundColor:'white'
      },
});