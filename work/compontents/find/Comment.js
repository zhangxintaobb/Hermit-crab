import React, { Component } from 'react'
import { Text, View, Dimensions, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import StarRating from 'react-native-star-rating';
const { width, height } = Dimensions.get('window');

export default class Comment extends Component {
    constructor() {
        super();
        this.state = {
            comment: []
        }
    }
    componentDidMount() {
        fetch("http://zy.eatclub.wang:3000/list/roomcomment?type=0&userid=" + this.props.srid)
            .then((res) => res.json())
            .then((res) => {
                console.log(res.data)
                var arr = []
                for (var i = 0; i < res.data.length; i++) {
                    let obj = { 'container': res.data[i].container, 'createtime': res.data[i].createtime, 'star': res.data[i].star }
                    fetch('http://zy.eatclub.wang:3000/userinfo?userid=' + res.data[i].userid)
                        .then((res) => res.json())
                        .then((res) => {
                            obj.name = res.data[0].username
                            obj.img = res.data[0].avatar
                            arr = this.state.comment
                            arr.push(obj)
                            this.setState({
                                comment: arr
                            })
                        })
                }
            })
    }
    formatDate(now) {
        var year = now.getFullYear();  //取得4位数的年份
        var month = now.getMonth() + 1;  //取得日期中的月份，其中0表示1月，11表示12月
        var date = now.getDate();      //返回日期月份中的天数（1到31）
        var hour = now.getHours();     //返回日期中的小时数（0到23）
        var minute = now.getMinutes(); //返回日期中的分钟数（0到59）
        var second = now.getSeconds(); //返回日期中的秒数（0到59）
        return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={styles.box}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>评论{'(' + this.state.comment.length + ')'}</Text>
                    <FlatList
                        data={this.state.comment}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) =>
                            <View style={styles.pinglun}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image
                                        style={{ width: 50, height: 50, borderRadius: 25 }}
                                        source={{ uri: item.img }}
                                    />
                                    <View style={{ marginLeft: 5 }}>
                                        <Text>{item.name}</Text>
                                        <Text style={{ fontSize: 12, color: '#aaa' }}>{this.formatDate(new Date(item.createtime))}</Text>
                                    </View>
                                    <View style={{ marginLeft: 200 }}>
                                        <Text style={{ marginLeft: 35 }}>{parseFloat(item.star) * 2}.0</Text>
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
                                    <Text style={{ color: '#aaa', marginTop: 5 }}>{item.container}</Text>
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
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 15,
        backgroundColor: '#fff',
    },
    pinglun: {
        marginTop: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#aaa',
        paddingTop: 5
    },
    button: {
        width: 80,
        height: 80,
        marginTop: 50,
        marginBottom: 80,
        marginLeft: '40%',
        alignItems: 'center',
        justifyContent: "center",
        borderRadius: 40,
        backgroundColor: '#0099CC',
    }
})
