import React, { Component } from 'react'
import { Text, View, Dimensions, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const { width, height } = Dimensions.get('window');

export default class Comment extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <ScrollView style={styles.box}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>评论(25)</Text>
                    <FlatList
                        data={[1, 2, 3, 4, 5, 6, 7]}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) =>
                            <View style={styles.pinglun}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={{ width: 50, height: 50, borderRadius: 25 }}
                                        source={require('../../assets/zy/pinglunAvatar.jpeg')}
                                    />
                                    <View style={{ marginLeft: 5 }}>
                                        <Text>Daniel Hua</Text>
                                        <Text style={{ fontSize: 12, color: '#aaa' }}>1小时前</Text>
                                    </View>
                                    <View style={{ marginLeft: 240 }}>
                                        <Text style={{ marginLeft: 50 }}>8.0</Text>
                                        <View style={{ flexDirection: 'row' }}>
                                            <Icon
                                                size={15}
                                                color={'#0099CC'}
                                                name="star"
                                            />
                                            <Icon
                                                size={15}
                                                color={'#0099CC'}
                                                name="star"
                                            />
                                            <Icon
                                                size={15}
                                                color={'#0099CC'}
                                                name="star"
                                            />
                                            <Icon
                                                size={15}
                                                color={'#0099CC'}
                                                name="star"
                                            />
                                            <Icon
                                                size={15}
                                                color={'#0099CC'}
                                                name="staro"
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{ paddingTop: 10 }}>
                                    <Text style={{ color: '#aaa', marginTop: 5 }}>这是一个非常棒的地方，环境很安静，推荐给大家。</Text>
                                </View>
                                <TouchableOpacity style={{ marginTop: 5 }}>
                                    <Text style={{ textDecorationLine: 'underline' }}>评论</Text>
                                </TouchableOpacity>
                            </View>
                        }
                    />
                    <TouchableOpacity style={styles.button}>
                        <Icon
                            size={40}
                            color={'#fff'}
                            name="form"
                        />
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flex:1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        backgroundColor:'#fff',
    },
    pinglun: {
        marginTop: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#aaa',
        paddingTop: 5
    },
    button:{
        width:80,
        height:80,
        marginTop: 50,
        marginBottom:80,
        marginLeft:'40%',
        alignItems:'center',
        justifyContent:"center",
        borderRadius:40,
        backgroundColor:'#0099CC',
    }
})
