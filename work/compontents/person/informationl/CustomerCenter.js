import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,TouchableHighlight, AsyncStorage,DeviceEventEmitter, Image, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default class MemberCenter extends Component {
    
    render() {
        return (
            <View>
                <View style={styles.title}><Text style={{ color: '#fff', fontSize: 20 }}>客服中心</Text></View>
                <View><Image style={{height:250,width:width}} source={require('../../../assets/qjx/transf.jpg')} /></View>
                
                <TouchableOpacity style={styles.kick}>
                    <Text style={{ color: '#fff', fontSize: 16 }}>私信客服</Text>
                </TouchableOpacity>

                {/* <View><Image style={{height:250,width:width}} source={require('../../../assets/qjx/vipmiddle.png')} /></View> */}
                
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
});