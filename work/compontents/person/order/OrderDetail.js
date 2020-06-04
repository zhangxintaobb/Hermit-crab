import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image } from 'react-native'

let { width, height } = Dimensions.get('window');
export default class OrderDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: {},
            room: '',
            img: ''
        };
    }

    componentDidMount() {
        fetch('http://zy.eatclub.wang:3000/list/order/detail?createtime=' + this.props.createtime)
            .then((res) => res.json())
            .then((res) => {
                this.setState({
                    order: res.data[0]
                })
                if (res.data[0].type == 0) {
                    fetch('http://zy.eatclub.wang:3000/list/sr/detail?id=' + res.data[0].roomid)
                        .then((res) => res.json())
                        .then((res) => {
                            this.setState({
                                room: res.data[0].srname,
                                img: res.data[0].img_url
                            })
                        })
                } else {
                    fetch('http://zy.eatclub.wang:3000/list/office/detail?id=' + res.data[0].roomid)
                        .then((res) => res.json())
                        .then((res) => {
                            this.setState({
                                room: res.data[0].officename,
                                img: res.data[0].img_url
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
    judgingStatus(state) {
        if(state === 0) {
            return '待付款'
        } else if(state === 1) {
            return '待使用'
        } else {
            return '已使用'
        }
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', height: '100%', flexDirection: 'column', alignItems: 'center' }}>
                <View style={styles.top}>
                    <View style={styles.title}>
                        <Image
                            source={{ uri: this.state.img }}
                            style={styles.pic}
                        />
                        <View style={styles.con}>
                            <Text style={{ fontSize: 18 }}> {this.state.room} </Text>
                            <Text style={{ color: '#bbb' }}>周一至周日 | 免预约</Text>
                            <Text style={{ color: '#bbb' }}>随时退 | 过期自动退</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.bottom}>
                    <View style={styles.info}>
                        <Text style={styles.orderinfo}>订单信息</Text>
                        <View style={{flexDirection:'column',height:height*0.5*0.9*0.6,justifyContent:'space-around'}}>
                            <Text>订单编号：{this.state.order.createtime}</Text>
                            <Text>下单时间：{this.formatDate(new Date(this.state.order.createtime))}</Text>
                            <Text>数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 量：{this.state.order.number}</Text>
                            <Text>总&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 价：{this.state.order.rental}</Text>
                            <Text>状&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 态：{this.judgingStatus(this.state.order.state)}</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    top: {
        height: height * 0.2,
        width: width * 0.85,
        borderRadius: 20,
        borderColor: '#bbb',
        borderWidth: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        height: height * 0.5,
        width: width * 0.85,
        borderRadius: 20,
        borderColor: '#bbb',
        borderWidth: 1,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        height: height * 0.2 * 0.8,
        width: width * 0.85 * 0.9,
        flexDirection: 'row'
    },
    pic: {
        height: height * 0.2 * 0.8,
        width: height * 0.2 * 0.8
    },
    con: {
        flexDirection: 'column',
        marginLeft: 10,
        justifyContent: 'space-around'
    },
    info: {
        height: height * 0.5 * 0.9,
        width: width * 0.85 * 0.9
    },
    orderinfo: {
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        height: 40,
        fontSize: 18
    }
})
