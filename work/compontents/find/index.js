import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import { Actions } from "react-native-router-flux";
import Icon from 'react-native-vector-icons/AntDesign'
import { Tabs, Button } from '@ant-design/react-native';

const { width, height } = Dimensions.get('window');

export default class index extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        fetch("http://zy.eatclub.wang:3000/list/office")
            .then((res) => res.json())
            .then((res) => {
                // console.log(res);
                this.setState({
                    office: res.data
                });
            })
        fetch("http://zy.eatclub.wang:3000/list/sr")
            .then((res) => res.json())
            .then((res) => {
                // console.log(res);
                this.setState({
                    sr: res.data
                });
            })
    }

    render() {
        const tabs = [
            { title: '自习室' },
            { title: '办公室' },
        ];
        return (
            <View style={{ flex: 1 }}>
                <Tabs tabs={tabs}>
                    <View style={styles.tabs}>
                        <ScrollView style={{width:width}}>
                            <FlatList
                                data={this.state.sr}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item }) =>
                                    <TouchableOpacity style={styles.listitem1} onPress={() => Actions.sr({ 'srid': item.srid })}>
                                        <Image
                                            source={{ uri: item.img_url }}
                                            style={styles.pic}
                                        />
                                        <View style={{ width: width * 0.3, }}>
                                            <Text style={styles.title}>{item.srname}</Text>
                                            <Text style={{ fontSize: 12, color: '#bbb', marginTop: 10 }}>{item.city},{item.region}</Text>
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
                                            <Text style={styles.price}>￥{item.price}</Text>
                                            <Text>/天</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                        </ScrollView>
                    </View>
                    <View style={styles.tabs}>
                        <ScrollView>
                            <FlatList
                                data={this.state.office}
                                keyExtractor={(item, index) => index}
                                renderItem={({ item }) =>
                                    <TouchableOpacity style={styles.listitem} onPress={() => Actions.office({ 'officeid': item.officeid })}>
                                        <Image
                                            source={{ uri: item.img_url }}
                                            style={styles.pic}
                                        />
                                        <View style={{ width: width * 0.3, }}>
                                            <Text style={styles.title}>{item.officename}</Text>
                                            <Text style={{ fontSize: 12, color: '#bbb', marginTop: 10 }}>{item.city},{item.region}</Text>
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
                                            <Text style={styles.price}>￥{item.price}</Text>
                                            <Text>/天</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                            />
                        </ScrollView>
                    </View>
                </Tabs>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    tabs: {
        alignItems: 'center',
        justifyContent: 'center',
        // height: 150,
        // backgroundColor: '#ccc',
        width: width
    },
    listitem1: {
        display: 'flex',
        height: height * 1 / 6,
        width: width * 0.9,
        margin: 0,
        marginTop: 10,
        marginLeft: width * 0.05,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row'
    },
    listitem: {
        display: 'flex',
        height: height * 1 / 6,
        width: width * 0.9,
        margin: 0,
        marginTop: 10,
        // marginLeft:width*0.05,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row'
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