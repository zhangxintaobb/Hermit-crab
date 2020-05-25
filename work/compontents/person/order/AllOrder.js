import React, { Component } from 'react'
import { StyleSheet, Dimensions, FlatList, AsyncStorage, Image } from 'react-native'
import { Container, Content, Text, View, Button, Icon, Left, Right, Body, Segment, Row } from "native-base";
let { width } = Dimensions.get('window');
export default class AllOrder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seg: 1,
            order: [],
            otherorder: []
        };
    }
    componentDidMount() {
        AsyncStorage.getItem('user')
            .then((res) => {
                let data = JSON.parse(res)
                // console.log(data[0].userid)
                fetch('http://zy.eatclub.wang:3000/list/order?userid=' + data[0].userid)
                    .then((res) => res.json())
                    .then((res) => {
                        // this.setState({  
                        //     otherorder: res.data
                        // })
                        // console.log(res.data)
                        for (let index = 0; index < res.data.length; index++) {
                            if (res.data[index].type == '0') {
                                let str = { 'rental': res.data[index].rental, 'state': res.data[index].state, 'time': res.data[index].createtime,'number':res.data[0].number };
                                let arr = this.state.otherorder;
                                arr.push(str);
                                // console.log(arr)
                                this.setState({
                                    otherorder: arr
                                });
                                fetch('http://zy.eatclub.wang:3000/list/sr/detail?id=' + res.data[index].roomid)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        let sstr = { 'key': res.data[0].srname, 'img': res.data[0].img_url, 'money': res.data[0].price };
                                        let aarr = this.state.order;
                                        aarr.push(sstr);
                                        // console.log(aarr);
                                        this.setState({
                                            order: aarr
                                        })
                                    })
                            } else {
                                let str = { 'rental': res.data[index].rental, 'state': res.data[index].state, 'time': res.data[index].createtime };
                                let arr = this.state.otherorder;
                                arr.push(str);
                                // console.log(arr)
                                this.setState({
                                    otherorder: arr
                                });
                                fetch('http://zy.eatclub.wang:3000/list/office/detail?id=' + res.data[index].roomid)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        let sstr = { 'key': res.data[0].officename, 'img': res.data[0].img_url, 'money': res.data[0].price };
                                        let aarr = this.state.order;
                                        aarr.push(sstr);
                                        // console.log(aarr);
                                        this.setState({
                                            order: aarr
                                        })
                                    })
                            }
                        }
                    })
            })

    }
    _renderItemSeparatorComponent = () => (
        <View style={{ height: 1, backgroundColor: '#c2c3c4' }}></View>
    );
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
        {
            var obj = this.state.order.map((item, index) => {
                return { ...item, ...this.state.otherorder[index] };
            });
            var secobj = obj.concat();
            var thobj = obj.concat();
            for (let i = secobj.length - 1; i >= 0; i--) {
                if (secobj[i].state != 0) {
                    secobj.splice(i, 1);
                }
            }
            for (let i = thobj.length - 1; i >= 0; i--) {
                if (thobj[i].state == 0) {
                    thobj.splice(i, 1);
                }
            }
        }
        return (
            <Container>
                <Segment>
                    <Button
                        first
                        active={this.state.seg === 1 ? true : false}
                        onPress={() => this.setState({ seg: 1 })}
                    >
                        <Text>全部</Text>
                    </Button>
                    <Button
                        active={this.state.seg === 2 ? true : false}
                        onPress={() => this.setState({ seg: 2 })}
                    >
                        <Text>已完成</Text>
                    </Button>
                    <Button
                        active={this.state.seg === 3 ? true : false}
                        onPress={() => this.setState({ seg: 3 })}
                    >
                        <Text>未完成</Text>
                    </Button>
                </Segment>

                <Content padder>
                    {
                        this.state.seg === 1
                        &&
                        <View style={styles.allOd}>
                            <FlatList
                                // data={
                                //     [
                                //         { key: '师大自习室', time: '2020/5/1-2020/5/2', state: '待支付', money: '￥20.00' },
                                //         { key: '国大办公室', time: '2020/4/1-2020/4/2', state: '已完成', money: '￥200.00' },
                                //         { key: '国大办公室', time: '2020/4/1-2020/4/2', state: '已完成', money: '￥200.00' }
                                //     ]}
                                data={obj}
                                renderItem={({ item }) =>
                                    <View style={styles.singleOd}>
                                        <View style={styles.singleOdLt}>
                                            <Text style={styles.odTitle}>{item.key}</Text>
                                            <Text>{this.formatDate(new Date(item.time))}</Text>
                                            <Text>数量：{item.number}</Text>
                                            <Text>{item.state == 0 ? '订单已完成' : <Text style={{ color: 'red' }}>订单未完成</Text>}</Text>
                                            <Text>￥{item.money}</Text>
                                        </View>
                                        <View style={styles.singleOdRt}>
                                            <Image
                                                style={styles.roompic}
                                                source={{ uri: item.img }}
                                            />
                                        </View>
                                    </View>

                                }
                                ItemSeparatorComponent={this._renderItemSeparatorComponent}
                            />
                            {/* <View style={styles.singleOd}>
                                <Text>{this.state.sr}</Text>
                            </View>
                            <View style={styles.singleOd}>
                                <Text>1</Text>
                            </View> */}
                        </View>
                    }
                    {this.state.seg === 2 &&
                        <View style={styles.allOd}>
                            <FlatList
                                data={secobj}
                                renderItem={({ item }) =>
                                    <View style={styles.singleOd}>
                                        <View style={styles.singleOdLt}>
                                            <Text style={styles.odTitle}>{item.key}</Text>
                                            <Text>{this.formatDate(new Date(item.time))}</Text>
                                         <Text>数量：{item.number}</Text>
                                            <Text>订单已完成</Text>
                                            <Text>￥{item.money}</Text>
                                        </View>
                                        <View style={styles.singleOdRt}>
                                            <Image
                                                style={styles.roompic}
                                                source={{ uri: item.img }}
                                            />
                                        </View>
                                    </View>
                                }
                                ItemSeparatorComponent={this._renderItemSeparatorComponent}
                            />
                        </View>
                    }
                    {this.state.seg === 3 &&
                        <View style={styles.allOd}>
                            <FlatList
                                data={thobj}
                                renderItem={({ item }) =>
                                    <View style={styles.singleOd}>
                                        <View style={styles.singleOdLt}>
                                            <Text style={styles.odTitle}>{item.key}</Text>
                                            <Text>{this.formatDate(new Date(item.time))}</Text>
                    <Text>数量：{item.number}</Text>
                                            <Text style={{ color: 'red' }}>订单未完成</Text>
                                            <Text>￥{item.money}</Text>
                                        </View>
                                        <View style={styles.singleOdRt}>
                                            <Image
                                                style={styles.roompic}
                                                source={{ uri: item.img }}
                                            />
                                        </View>
                                    </View>
                                }
                                ItemSeparatorComponent={this._renderItemSeparatorComponent}
                            />
                        </View>
                    }
                </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    allOd: {
        alignItems: 'center'
    },
    singleOd: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: 0.8 * width,
        height: 150
    },
    singleOdLt: {
        width: 0.5 * width,
        justifyContent: 'center'
    },
    singleOdRt: {
        width: 0.3 * width,
        justifyContent: 'center'
    },
    roompic: {
        width: 0.3 * width,
        height: 70
    },
    odTitle: {
        fontWeight: 'bold'
    }
});