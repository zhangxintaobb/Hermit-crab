import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    Alert
} from 'react-native'
import {
    Actions
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import md5 from "react-native-md5"
let url = 'http://zy.eatclub.wang:3000/register'

export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '', //用户名
            pwd: '', //密码
            pwdagain: '',//确认密码
            isloading: false
        }
    }

    userhandle = (text) => {
        this.setState({ username: text })
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }
    pwdagainhandle = (text) => {
        this.setState({ pwdagain: text })
    }
    register = () => {

        // if (this.state.username != '' && this.state.pwd != '' && this.state.pwdagain != '') {
        //     if (this.state.pwd == this.state.pwdagain) {
                // let options = {
                //     method: "get",
                //     query: {
                //         password: this.state.pwd,
                //         phone: this.state.username
                //     }
                // }
                // console.log(options)
        //         this.setState({ isloading: true })
        //         fetch('http://zy.eatclub.wang:3000/register', {
        //             method: 'GET',
        //             headers: {
        //                 "Accept": "application/json",
        //                 "Content-Type": 'application/json',
        //                 "Connection": "close",
        //                 "type": "getUserData",
        //             },
        //             query: JSON.stringify({

        //             }),
        //         })
        //             .then((res) => res.json())
        //             .then((res) => {
        //                 console.log(res)
        //                 this.setState({ isloading: false })
        //             })
        //             .catch(function (err) {
        //                 console.log(err);
        //             })
        //     }
        //     else { Alert.alert("密码不一致"); }
        // }
        // else {
        //     Alert.alert("用户名或密码不为空");
        // }
        Actions.login()
    }
    render() {
        return (
            <View style={styles.box}>
                {/* title */}
                <View style={styles.title}>
                    <Text style={styles.titlefont}>注册</Text>
                </View>
                {/* 留白 */}
                <View style={styles.liubai}></View>
                {/* 用户名 */}
                <View style={styles.username}>
                    <TextInput
                        style={styles.input}
                        placeholder="用户名"
                        onChangeText={this.userhandle}
                    />
                </View>
                {/* 密码 */}
                <View style={styles.passwrod}>
                    <TextInput
                        style={styles.input}
                        placeholder="密码"
                        onChangeText={this.pwdhandle}
                        secureTextEntry={true}
                    />
                </View>
                {/* 确认密码 */}
                <View style={styles.passwrod}>
                    <TextInput
                        style={styles.input}
                        placeholder="确认密码"
                        onChangeText={this.pwdagainhandle}
                        secureTextEntry={true}
                    />
                </View>
                {/* 注册 */}
                <TouchableOpacity
                    style={styles.register}
                    onPress={this.register}>
                    <Text style={{ color: '#599F6F', fontSize: 16 }}>注册</Text>
                </TouchableOpacity>
                {/* 留白 */}
                <View style={styles.liubai}></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#599F6F',
        flex: 1
    },
    title: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '10%',
    },

    titlefont: {
        fontSize: 24,
        color: '#FFF'
    },
    liubai: {
        width: '100%',
        height: '20%'
    },
    input: {
        width: '100%',
        backgroundColor: '#FFF',
        borderRadius: 30
    },
    username: {
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        height: 80,
    },
    passwrod: {
        width: '70%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
    },
    register: {
        width: '70%',
        height: 50,
        backgroundColor: '#FFF',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
})