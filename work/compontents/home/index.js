import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Dimensions, ScrollView, Image, SafeAreaView } from 'react-native'
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button';
import { black } from 'color-name';

const {width} = Dimensions.get('window')

export default class index extends Component {
    render() {
        return (
            <SafeAreaView>
            <View>
                <View style={{flexDirection:'row',height:50,justifyContent:"center"}}>
                    <View style={{marginTop:10,marginLeft:20}}>
                    <Icon size={25} color="#33CC99"
                            name="enviroment"
                        />
                        <Text>石家庄</Text>
                    </View>
                    <View style={{
                        width:'70%',
                        backgroundColor:'#fff',
                        marginLeft:30,
                        flexDirection:'row',
                        borderRadius:20,
                        paddingLeft:10,
                        marginTop:10,
                    }}>
                        <Image style={{width:20,height:20,marginTop:9,}} source={require('../../assets/qjx/found.png')}/>
                        <TextInput placeholder='' />
                    </View>
                    <View style={{
                        marginTop:15,
                        marginLeft:10
                    }}>
                        <Icon size={30}
                            name="bells"
                        />
                    </View>
                </View>
                <ScrollView
                    pagingEnabled={true}
                    horizontal={true}
                >
                    <View style={styles.slide}>
                        <Image style={styles.pic} source={require('../../assets/qjx/home001.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.pic} source={require('../../assets/qjx/home002.jpg')} />
                    </View>
                    <View style={styles.slide}>
                        <Image style={styles.pic} source={require('../../assets/qjx/home003.jpg')} />
                    </View>
                </ScrollView>

                <ScrollView>
                    <View  style={{
                        flexDirection:'row',
                        justifyContent:'space-around',
                        flexWrap:'wrap',
                        marginTop:20,
                        width:'100%',
                    }}>
                        <View style={styles.box1}>
                            <Image style={{width:30,height:30}} source={require('../../assets/qjx/beijing.png')} />
                            <Text>北京</Text>
                        </View>
                        <View style={styles.box1}>
                            <Image style={{width:30,height:30}} source={require('../../assets/qjx/shanghai.png')} />
                            <Text>上海</Text>
                        </View>
                        <View style={styles.box1}>
                            <Image style={{width:30,height:30}} source={require('../../assets/qjx/hangzhou.png')} />
                            <Text>杭州</Text>
                        </View>
                        <View style={styles.box1}>
                            <Image style={{width:30,height:30}} source={require('../../assets/qjx/shenzhen.png')} />
                            <Text>深圳</Text>
                        </View>
                        <View style={styles.box1}>
                            <Image style={{width:30,height:30}} source={require('../../assets/qjx/xiamen.png')} />
                            <Text>厦门</Text>
                        </View>
                    </View>
                </ScrollView>

                <ScrollView>
                    <View 
                        style={{
                            width:'90%',
                            flexDirection:'row',
                            justifyContent:'space-between',
                            flexWrap:'wrap',
                            marginTop: 50,
                            marginLeft: '5%',
                            
                        }}
                    >
                        <View style={styles.box2}>
                            <Image style={{width:100,height:100}} source={require('../../assets/qjx/guoda.jpg')} />
                            <Text>国大自习室</Text>
                            <Text>裕华，石家庄</Text>
                            <Text>距离：2km</Text>
                            <Text>￥1080/小时</Text>
                            <Text>评级：4星</Text>
                        </View>
                        <View style={styles.box2}>
                            <Image style={{width:100,height:100}} source={require('../../assets/qjx/shida.jpg')} />
                            <Text>师大自习室</Text>
                            <Text>裕华，石家庄</Text>
                            <Text>距离：2km</Text>
                            <Text>￥1080/小时</Text>
                            <Text>评级：4星</Text>
                        </View>
                        <View style={styles.box2}>
                            <Image style={{width:100,height:100}} source={require('../../assets/qjx/beida.jpg')} />
                            <Text>北大自习室</Text>
                            <Text>朝阳区，北京</Text>
                            <Text>距离：200km</Text>
                            <Text>￥2560/每晚</Text>
                            <Text>评级：4星</Text>
                        </View>
                    </View>
                </ScrollView>

                <View style={{height:150,marginTop:10}}>
                    <View style={styles.button}>
                        <Button style={{color:'#fff'}}>点击查看更多</Button>
                    </View>

                </View>
            </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    pic:{
        height:250,
        width:'100%'
    },
    button:{
        backgroundColor:'#33CC99',
        width: '80%',
        height: 50,
        marginLeft:'10%',
        borderRadius:30,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20
    },
    slide:{
        width: width,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        marginTop:10
    },
    box2:{
        width: 110,
        height: 210,
        backgroundColor:'#D1D1D1',
        borderRadius: 5,
        borderStyle: "solid",
        borderLeftColor: '#000000'
    }
})
