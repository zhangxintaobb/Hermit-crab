import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView,
    FlatList,
    StatusBar,
    AsyncStorage,
    DeviceEventEmitter
} from 'react-native'
import StarRating from 'react-native-star-rating';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import { Tabs } from '@ant-design/react-native';
import Load from '../load';
const { width, height } = Dimensions.get('window');

export default class index extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            isloading:false
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('user')
            .then((res) => {
                let data = JSON.parse(res)
                this.setState({
                    isloading:true
                })
                fetch('http://zy.eatclub.wang:3000/list/usercomment?userid=' + data[0].userid)
                    .then((res) => res.json())
                    .then((res) => {
                        var arr = []
                        
                        for (var i = 0; i < res.data.length; i++) {
                            
                            let obj = { 'container': res.data[i].container, 'createtime': res.data[i].createtime, 'star':res.data[i].star }
                            if (res.data[i].type == 0) {
                                fetch('http://zy.eatclub.wang:3000/list/sr/detail?id=' + res.data[i].roomid)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        obj.name = res.data[0].srname
                                        obj.img = res.data[0].img_url
                                        arr = this.state.data
                                        arr.push(obj)
                                        this.setState({
                                            data: arr
                                        })
                                        
                                    })
                            }
                            else {
                                fetch('http://zy.eatclub.wang:3000/list/office/detail?id=' + res.data[i].roomid)
                                    .then((res) => res.json())
                                    .then((res) => {
                                        obj.name = res.data[0].officename
                                        obj.img = res.data[0].img_url
                                        arr = this.state.data
                                        arr.push(obj)
                                        this.setState({
                                            data: arr
                                        })
                                        
                                    })
                            }
                       
                        }
                        this.setState({
                            isloading:false
                        })
                    })
            })
            .catch(function (err) {
                console.log(err);
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
    _delete = (time) => {
        fetch('http://zy.eatclub.wang:3000/delcomment?createtime=' + time)
        .then(res=>res.json())
        .then((res)=>{

        })
       
    }
   
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                 {this.state.isloading?<Load spinkerType="Circle" />:null}
                <StatusBar
                    animated={true} //指定状态栏的变化是否应以动画形式呈现。目前支持这几种样式：backgroundColor, barStyle和hidden  
                    hidden={false}  //是否隐藏状态栏。  
                    backgroundColor={'green'} //状态栏的背景色  
                    translucent={false}//指定状态栏是否透明。设置为true时，应用会在状态栏之下绘制（即所谓“沉浸式”——被状态栏遮住一部分）。常和带有半透明背景色的状态栏搭配使用。  
                    barStyle={'light-content'} // enum('default', 'light-content', 'dark-content')   
                >
                </StatusBar>
                <ScrollView style={{ flex: 1 }}>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) =>
                            <View style={styles.box}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>{this.formatDate(new Date(item.createtime))}</Text>
                                        <View style={{ height: 55 }}>
                                            <Text>{item.container}</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity onPress={() => { this._delete(item.createtime) }}>
                                        <Icon
                                            name='close'
                                            size={30}
                                            color='red'
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.img}>
                                    <Image
                                        source={{ uri: item.img }}
                                        style={{ width: '30%', height: 80 }}
                                    />
                                    <View style={{ width: '70%', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                        <Text>{item.name}</Text>
                                        <StarRating
                                            fullStarColor='yellow'
                                            disabled={true}
                                            maxStars={5}
                                            rating={item.star}
                                        />
                                    </View>
                                </View>
                            </View>
                        }
                    />

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        height: height * 0.2,
        width: width * 0.9,
        borderColor: '#eee',
        borderWidth: 1,
        marginLeft: width * 0.05,
        marginTop: height * 0.01,
        padding: 10,
    },
    button: {
        width: width * 0.5,
        height: width * 0.12,
        backgroundColor: '#99CCFF',
        marginLeft: width * 0.25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: width * 0.05,
        marginBottom: width * 0.05,
        borderRadius: 10,
    },
    img: {
        borderColor: '#ccc',
        borderWidth: 1,
        flexDirection: 'row'
    }
})