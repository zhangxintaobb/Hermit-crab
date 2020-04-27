import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Dimensions, ScrollView, Image, FlatList, TouchableOpacity } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button';
import { black } from 'color-name';

const { width, height } = Dimensions.get('window')

export default class index extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <ScrollView>
                    <View style={{ flexDirection: 'row', height: 60, justifyContent: "center", backgroundColor: '#fff' }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Icon
                                size={25}
                                color="#33CC99"
                                name="enviroment"
                            />
                            <Text>石家庄</Text>
                        </View>
                        <View style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '',
                            marginLeft: 10,
                            flexDirection: 'row',
                            borderRadius: 20,
                            paddingLeft: 10,
                            marginTop: 10,
                            borderWidth: 0.5,
                            alignItems: 'center'
                        }}>
                            <Icon size={20} color="#33CC99"
                                name="search1"
                            />
                            <TextInput placeholder='请输入关键字'
                            />
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                            <Icon size={25}
                                name="bells"
                            />
                        </View>
                    </View>
                    <ScrollView
                        pagingEnabled={true}
                        horizontal={true}
                    >
                        <View style={styles.slide}>
                            <Image style={styles.pic1} source={require('../../assets/qjx/home001.jpg')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.pic1} source={require('../../assets/qjx/home002.jpg')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.pic1} source={require('../../assets/qjx/home003.jpg')} />
                        </View>
                    </ScrollView>

                    <View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap',
                            paddingTop: 20,
                            width: '100%',
                            backgroundColor: 'white'
                        }}>
                            <View style={styles.box1}>
                                <Image style={{ width: 50, height: 50, borderRadius: 20 }} source={require('../../assets/qjx/beijing.png')} />
                                <Text>北京</Text>
                            </View>
                            <View style={styles.box1}>
                                <Image style={{ width: 50, height: 50, borderRadius: 20 }} source={require('../../assets/qjx/shanghai.png')} />
                                <Text>上海</Text>
                            </View>
                            <View style={styles.box1}>
                                <Image style={{ width: 50, height: 50, borderRadius: 20 }} source={require('../../assets/qjx/hangzhou.png')} />
                                <Text>杭州</Text>
                            </View>
                            <View style={styles.box1}>
                                <Image style={{ width: 50, height: 50, borderRadius: 20 }} source={require('../../assets/qjx/shenzhen.png')} />
                                <Text>深圳</Text>
                            </View>
                            <View style={styles.box1}>
                                <Image style={{ width: 50, height: 50, borderRadius: 20 }} source={require('../../assets/qjx/xiamen.png')} />
                                <Text>厦门</Text>
                            </View>
                        </View>
                        <FlatList
                            data={[1, 2, 3]}
                            keyExtractor={(item, index) => index}
                            renderItem={({ item }) =>
                                <TouchableOpacity style={styles.listitem}>
                                    <Image
                                        source={require('../../assets/qjx/guoda.jpg')}
                                        style={styles.pic}
                                    />
                                    <View style={{ width: width * 0.3, }}>
                                        <Text style={styles.title}>国大自习室</Text>
                                        <Text style={{ fontSize: 12, color: '#bbb', marginTop: 10 }}>石家庄,裕华区</Text>
                                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                            <Icon
                                                size={15}
                                                color={'#f23636'}
                                                name="enviromento"
                                            />
                                            <Text style={{ fontSize: 12, color: '#bbb' }}>距离2KM</Text>
                                        </View>
                                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                                            <Icon
                                                size={20}
                                                color={'#f23636'}
                                                name="star"
                                            />
                                            <Icon
                                                size={20}
                                                color={'#f23636'}
                                                name="star"
                                            />
                                            <Icon
                                                size={20}
                                                color={'#f23636'}
                                                name="star"
                                            />
                                            <Icon
                                                size={20}
                                                color={'#f23636'}
                                                name="star"
                                            />
                                            <Icon
                                                size={20}
                                                color={'#f23636'}
                                                name="staro"
                                            />
                                        </View>
                                    </View>
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={styles.price}>￥30</Text>
                                        <Text>/天</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        />
                    </View>
                    <TouchableOpacity style={styles.button} onPress={()=>Actions.find()}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>点击查看更多</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    pic1: {
        height: 200,
        width: '100%'
    },
    button: {
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
    slide: {
        width: width,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        // marginTop: 10
    },
    box: {
        width: 215,
        paddingLeft: 10,
        marginRight: 70
    },
    box1: {
        alignItems: 'center'
    },
    box2: {
        marginLeft: 50,
        marginTop: 5
    },
    listitem: {
        display: 'flex',
        height: height * 1 / 6,
        width: width * 0.9,
        margin: 0,
        marginTop: 10,
        marginLeft: width * 0.05,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row',
        borderWidth: 0.5
    },
    pic: {
        width: width * 0.4,
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 10
    },
    title: {
        height: '25%',
        fontSize: 14,
        marginTop: 5,
    },
    price: {
        fontSize: 14,
        marginTop: 5,
        fontWeight: 'bold'
    }
})
