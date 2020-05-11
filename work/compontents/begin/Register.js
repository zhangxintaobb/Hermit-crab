import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    ToastAndroid
} from 'react-native'
import {
    Actions
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import md5 from "react-native-md5"
let url = 'http://zy.eatclub.wang:3000/register'
import Load from '../load'
let myreg= /^[1][3,4,5,7,8][0-9]{9}$/
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
        if (this.state.username != '' && this.state.pwd != '' && this.state.pwdagain != '') {
            if (this.state.pwd == this.state.pwdagain) {
                
                if (!myreg.test(this.state.username)) {
                    ToastAndroid.show('请填写正确手机号码',300);
                }
                else {
                    this.setState({ isloading: true })
                    fetch(url + '?phone=' + this.state.username + '&' + 'password=' + md5.hex_md5(this.state.pwd), {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'text/plain'
                        },
                    })
                        .then((res) => res.json())
                        .then((res) => {
                            this.setState({ isloading: false })
                            if(res.msg=="OK"){
                                Actions.login()
                            }
                            else{
                                ToastAndroid.show("用户已存在",300)
                            }
                        })
                        .catch(function (err) {
                            console.log(err);
                        })
                }
            }
            else { ToastAndroid.show("密码不一致",300); }
        }
        else {
            ToastAndroid.show("用户名或密码不为空",300);
        }
       
    }
    render() {
        return (
            <View style={styles.box}>
                 {this.state.isloading?<Load spinkerType="Circle" />:null}
                {/* title */}
                <View style={styles.title}>
                    <TouchableOpacity onPress={Actions.login}>
                    <Icon size={20} name='left' color={"white"} />
                    </TouchableOpacity>
                    <Text style={styles.titlefont}>注册</Text>
                    <View style={{width:30}}></View>
                </View>
                {/* 留白 */}
                <View style={styles.liubai}></View>
                {/* 用户名 */}
                <View style={styles.username}>
                    <TextInput
                        style={styles.input}
                        placeholder="请填写手机号"
                        onChangeText={this.userhandle}
                    />
                </View>
                {/* 密码 */}
                <View style={styles.passwrod}>
                    <TextInput
                        style={styles.input}
                        placeholder="请填写密码"
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
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