import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    AsyncStorage,
    DeviceEventEmitter
} from 'react-native'
import {
    Actions
} from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
const orderData = [
    { icon: 'wallet', name: '待付款', jump: () => Actions.unpay },
    { icon: 'qrcode', name: '待使用', jump: () => Actions.unuse },
    { icon: 'edit', name: '待评价', jump: () => Actions.uncomment },
    { icon: 'creditcard', name: '退款/售后', jump: () => Actions.refund }
];
const jumpData = [
    { icon: 'staro', name: '我的收藏', jump: () => Actions.mycollect },
    { icon: 'form', name: '我的评价', jump: () => Actions.mycomment },
    { icon: 'message1', name: '我的消息', jump: () => Actions.message },
    { icon: 'redenvelopes', name: '红包/卡券', jump: () => Actions.mycard }
]
const list = [
    { name: '个人信息', jump: () => Actions.information },
    { name: '余额查询', jump: () => Actions.information},
    { name: '会员中心', jump: () => Actions.menbercenter },
    { name: '客服中心', jump: () => Actions.customercenter },
    { name: '关于寄居蟹', jump: () => Actions.about },
]
import Icon from 'react-native-vector-icons/AntDesign';

export default class index extends Component {
    constructor() {
        super();
        this.state = {
            username: '小螃蟹',
            avatarSource: "http://touxiang.yeree.com/pics/9e/2287425.jpg",
            userid: '666'
        }
    }
    
    componentDidMount() {
        AsyncStorage.getItem('user')
        .then((res)=>{
            let data=JSON.parse(res)
            console.log(data[0].username)
            console.log('storage:'+res)
            this.setState({
                username:data[0].username,
                userid:data[0].userid,
                avatarSource: "http://zy.eatclub.wang:3030/public/img/nologin.png"
            })
        })
        .catch(function (err) {
            console.log(err);
        })
        this.subscription = DeviceEventEmitter.addListener("EventType", ()=>{
            AsyncStorage.getItem('user')
            .then((res)=>{
                let data=JSON.parse(res)
                console.log(data[0].username)
                console.log('storage:'+res)
                this.setState({
                    username:data[0].username,
                    userid:data[0].userid,
                    avatarSource: "http://zy.eatclub.wang:3030/public/img/nologin.png"
                })
            })
            .catch(function (err) {
                console.log(err);
            })
        });
    }
    componentWillUnmount() {
        this.subscription.remove();
    }
    storeData = async (img) => {
        await AsyncStorage.setItem('image', img,
            () => { console.log('store success') }
        )
    }
    getData = () => {
        AsyncStorage.getItem('image')
            .then((res) => console.log(res));
    }
    tackpicker = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {
                const source = { uri: response.uri };

                this.setState({
                    avatarSource: source,
                });
                this.storeData(source.uri)
                this.getData()
            }
        });
    }
    render() {
        { console.log(this.state.userid) }
        return (

            <View style={styles.box}>
                {/* 头部 */}
                <View style={styles.head}>
                    <View style={styles.left}>
                        {/* 头像 */}
                        <TouchableOpacity style={styles.headportrait} onPress={() => this.tackpicker()}>
                            <Image
                                source={{ uri: this.state.avatarSource }}
                                resizeMode='contain'
                                style={{ width: 60, height: 60, borderRadius: 65 }}
                                imageStyle={{ borderRadius: 65 }}
                            />
                        </TouchableOpacity>
                        <View style={styles.user}>
                            <Text>昵称:{this.state.username}</Text>
                            <Text>ID:{this.state.userid}</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.right} onPress={Actions.notify}>
                        <Icon
                            size={25}
                            color={'#ccc'}
                            name='bells'
                        />
                    </TouchableOpacity>
                </View>
                {/* 功能 */}
                <View style={styles.contentbox}>

                    {jumpData.map((data, i) => (
                        <TouchableOpacity style={styles.content}
                            onPress={data.jump()}>
                            <Icon
                                size={25}
                                color={'#0772A1'}
                                name={data.icon}
                            />
                            <Text>{data.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                {/* 订单 */}
                <View style={styles.orderbox}>
                    <View style={styles.orderhead}>
                        <Text>我的订单</Text>
                        <TouchableOpacity >
                            <Text style={{ color: '#ccc' }}>查看全部订单 ></Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.ordercontent}>
                        {orderData.map((data, i) => (
                            <TouchableOpacity style={styles.order}
                                onPress={data.jump()}>
                                <Icon
                                    size={25}
                                    color={'#FFA900'}
                                    name={data.icon}
                                />
                                <Text>{data.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                {/* 其他 */}
                <View style={styles.otherbox}>
                    {/* 个人中心 */}
                    {list.map((data, i) => (
                        <TouchableOpacity style={styles.other} onPress={data.jump()}>
                            <Text>{data.name}</Text>
                            <Icon
                                size={15}
                                color={'#ccc'}
                                name='right'
                            />
                        </TouchableOpacity>
                    ))}

                    {/* 退出 */}
                    <View style={styles.foot}>
                        <TouchableOpacity
                            style={styles.signout}
                            onPress={() => {
                                AsyncStorage.getItem("user")
                                    .then(res => {
                                        if (res) {
                                            AsyncStorage.removeItem("user")
                                                .then((error) => console.log(error));
                                            Actions.login()
                                        } else {
                                            console.log("请登录")
                                        }
                                    })
                            }}
                        >
                            <Text>退出登录</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#599F6F'
    },
    head: {
        height: '10%',
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    left: {
        height: '100%',
        width: '50%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    headportrait: {
        height: '100%',
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    user: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        width: '60%',
        height: '100%',
    },
    right: {
        height: '100%',
        width: '30%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentbox: {
        width: '90%',
        height: '12%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '25%',
        height: '100%',
    },
    orderbox: {
        width: '90%',
        height: '12%',
        backgroundColor: 'white',
        borderRadius: 15
    },
    orderhead: {
        height: '35%',
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '5%',
        paddingRight: '5%',
    },
    ordercontent: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    order: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '25%',
        height: '65%',
    },

    otherbox: {
        marginTop: '3%',
        width: '90%',
        height: '64%',
        backgroundColor: 'white',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        flexDirection: 'column',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    other: {
        width: '80%',
        height: '10%',
        // backgroundColor:'red',
        marginBottom: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#ccc',
        borderBottomWidth: 2,
        paddingLeft: '6%'
    },
    foot: {
        marginTop: 20,
        height: '10%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signout: {
        width: '60%',
        height: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 80,
        backgroundColor: "#009688",
    }
})