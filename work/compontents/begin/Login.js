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
export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            pwd: '',
            isloading: false
        }
    }
    userhandle = (text) => {
        this.setState({ username: text })
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }
    login = () => {
        console.log(this.state.username)
        console.log(this.state.pwd)
        this.setState({ isloading: true })
    }
    render() {
        return (
            <View style={styles.box}>
                {/* title */}
                <View style={styles.title}>
                    <Text style={styles.titlefont}>登录</Text>
                </View>
                {/* 头像 */}
                <View style={styles.headportrait}>
                    <Image
                        source={require('../../assets/zxt/Login/person.png')}
                        resizeMode='contain'
                        style={{ width: 130, height: 130, borderRadius: 65 }}
                        imageStyle={{ borderRadius: 65 }}
                    />
                </View>
                {/* 用户名 */}
                <View style={styles.username}>
                    <TextInput
                        style={styles.input}
                        placeholder="用户名"
                        onChangeText={this.userhandle}
                    />
                </View>
                {/* 用户名 */}
                <View style={styles.passwrod}>
                    <TextInput
                        style={styles.input}
                        placeholder="密码"
                        onChangeText={this.pwdhandle}
                    />
                </View>
                {/* 注册 & 忘记密码 */}
                <View style={styles.other}>
                    <TouchableOpacity onPress={Actions.register}>
                        <Text style={{color:'#0B63A7'}}>立即注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>找回密码</Text>
                    </TouchableOpacity>

                </View>

                {/* 登录 */}
                <TouchableOpacity
                    style={styles.login}
                    onPress={this.login}>
                    <Text>登录</Text>
                </TouchableOpacity>
                {/* 快捷登录 */}
                <View style={styles.convenientLogin} >
                    <Text>--快捷登录--</Text>
                    <View style={styles.convenienticon}>
                        <TouchableOpacity>
                        <Icon name="qq" size={20} color={'#3A14B2'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Icon name="wechat" size={20} color={'#3A14B2'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Icon name="weibo" size={20} color={'#3A14B2'} />
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
        backgroundColor: '#009999',
        flex: 1
    },
    title: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '10%',
        marginTop:20
    },

    titlefont: {
        fontSize: 24
    },
    headportrait: {
        height: '25%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
    other: {
        width: '60%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    login: {
        width: '70%',
        height: 50,
        backgroundColor: '#0B5FA5',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
    convenientLogin: {
        marginTop: 30,
        width: "70%",
        height: '30%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    convenienticon: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        height: '50%',
        justifyContent: 'space-around'
    }
})