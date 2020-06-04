import React, { Component } from 'react'
import {
    Text,
    View,
    AsyncStorage,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native'
import { Actions } from 'react-native-router-flux'
export default class UnUse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('user')
            .then((res) => {
                let data = JSON.parse(res)
                fetch('http://zy.eatclub.wang:3000/list/order?userid=' + data[0].userid)
                    .then((res) => res.json())
                    .then((res) => {
                        // console.log(res.data)
                        var arr = []
                        for (let i = 0; i < res.data.length; i++) {
                            if (res.data[i].state == '1') {
                                arr.push(res.data[i])
                            }
                        }
                        var item = []
                        // console.log(arr)
                        for (let index = 0; index < arr.length; index++) {
                            if (arr[index].type == '0') {
                                let str = { 'rental': arr[index].rental, 'state': arr[index].state, 'createtime': arr[index].createtime, 'number': arr[index].number };
                                fetch('http://zy.eatclub.wang:3000/list/sr/detail?id=' + arr[index].roomid)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        str.name = res.data[0].srname
                                        str.img = res.data[0].img_url
                                        item = this.state.data
                                        item.push(str)
                                        this.setState({
                                            data: item
                                        })

                                    })

                            } else {
                                let str = { 'rental': arr[index].rental, 'state': arr[index].state, 'createtime': arr[index].createtime, 'number': arr[index].number };
                                fetch('http://zy.eatclub.wang:3000/list/office/detail?id=' + arr[index].roomid)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        console.log(res.data)
                                        str.name = res.data[0].officename,
                                            str.img = res.data[0].img_url,
                                            str.money = res.data[0].price
                                        item = this.state.data
                                        item.push(str)
                                        this.setState({
                                            data: item
                                        })
                                    })
                            }

                        }

                    })
            })
    }
    _use = () => {

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
        // {console.log('123')}
        // {console.log(this.state.data)}
        return (
            <ScrollView>
                <View style={styles.box}>
                    {this.state.data.map((data, i) => (
                        <TouchableOpacity style={styles.item} onPress={() => Actions.orderdetail({ 'createtime': data.createtime })}>
                            <View style={styles.title}>
                                <Text style={{ fontWeight: 'bold' }}>{data.name}</Text>
                                <Text style={{ color: '#ccc' }}>待使用</Text>
                            </View>
                            <View style={styles.container}>
                                <View style={styles.left}>
                                    <Image
                                        style={styles.pic}
                                        source={{ uri: data.img }}
                                    />
                                </View>
                                <View style={styles.right}>
                                    <Text>下单时间:{this.formatDate(new Date(data.createtime))}</Text>
                                    <Text>数量:{data.number}</Text>
                                    <Text>总价:￥{data.rental}</Text>
                                </View>
                            </View>
                            <View style={styles.foot}>
                                <TouchableOpacity style={styles.button}
                                    onPress={() => { this._use() }}>
                                    <Text>查看券码</Text>
                                </TouchableOpacity>
                            </View>

                        </TouchableOpacity>
                    ))}

                </View>

            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        flexDirection: 'column',
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: 'white',
        width: '90%',
        height: 180,
        marginTop: 15,
        borderRadius: 15
    },
    title: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%",
        height: '23%',
        padding: 10,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    container: {
        width: '90%',
        height: '53%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    left: {
        width: '20%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    pic: {
        width: "100%",
        height: "80%",
        borderRadius: 10
    },
    right: {
        width: '80%',
        height: '100%',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: 20
    },
    button: {
        width: 80,
        height: 30,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    foot: {
        width: '100%',
        height: '24%',
        alignItems: 'flex-end',
        paddingRight: 30
    }
})