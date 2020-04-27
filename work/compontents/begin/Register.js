import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image
} from 'react-native'
import {
    Actions
  } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            username: '', //用户名
            pwd: '', //密码
            pwdagain:'',//确认密码
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
        console.log(this.state.username)
        console.log(this.state.pwd)
        console.log(this.state.pwdagain)
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
                    />
                </View>
                {/* 确认密码 */}
                <View style={styles.passwrod}>
                    <TextInput
                        style={styles.input}
                        placeholder="确认密码"
                        onChangeText={this.pwdagainhandle}
                    />
                </View>
                {/* 注册 */}
                <TouchableOpacity
                    style={styles.register}
                    onPress={this.register}>
                    <Text>注册</Text>
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
        backgroundColor: '#009999',
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
        fontSize: 24
    },
    liubai:{
        width:'100%',
        height:'20%'
    },
    input: {
        width: '100%',
        backgroundColor: '#ccc',
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
        backgroundColor: '#0B5FA5',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
})