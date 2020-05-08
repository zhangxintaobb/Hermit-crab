import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Image,
    AsyncStorage
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
            isloading: false,
            data:''
        }
    }
    userhandle = (text) => {
        this.setState({ username: text })
    }
    pwdhandle = (text) => {
        this.setState({ pwd: text })
    }
    login = () => {
        // fetch("http://zy.eatclub.wang:3000/login")
        //     .then((res) => res.json())
        //     .then((res) => {
        //         // console.log(res);
        //         this.setState({
        //             data: res.data
        //         });
        //     })
        this.setState({isloading:true})
        // console.log(this.state.username)
        console.log(this.state.data)
        this.setState({ isloading: true })
        AsyncStorage.setItem('user',JSON.stringify("zxt"))
        .then(()=>{
            this.setState({isloading:false})
            Actions.home();
        })
        
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
                        <Text style={{color:'#FFF'}}>立即注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text  style={{color:'#FFF'}}>找回密码</Text>
                    </TouchableOpacity>

                </View>

                {/* 登录 */}
                <TouchableOpacity
                    style={styles.login}
                    onPress={this.login}>
                    <Text style={{color:'#599F6F',fontSize:16}}>登录</Text>
                </TouchableOpacity>
                {/* 快捷登录 */}
                <View style={styles.convenientLogin} >
                    <Text style={{color:'#FFF'}}>--快捷登录--</Text>
                    <View style={styles.convenienticon}>
                        <TouchableOpacity>
                        <Icon name="qq" size={30} color={'#FFF'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Icon name="wechat" size={30} color={'#FFF'} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                        <Icon name="weibo" size={30} color={'#FFF'} />
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
        backgroundColor: '#599F6F',
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
        fontSize: 24,
        color:'#FFF'
    },
    headportrait: {
        height: '25%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
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
    other: {
        width: '60%',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    login: {
        width: '70%',
        height: 50,
        backgroundColor: '#FFF',
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