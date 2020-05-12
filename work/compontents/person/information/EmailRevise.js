import React, { Component } from 'react'
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    AsyncStorage,
    ToastAndroid
} from 'react-native'
import {
    Actions
} from 'react-native-router-flux';
let url = 'http://zy.eatclub.wang:3000/changeinfo'
export default class EmailRevise extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            data: {}
        }
    }
    componentDidMount() {
        AsyncStorage.getItem('user')
            .then((res) => {
                this.setState({
                    data: JSON.parse(res)[0]
                })
            })
    }
    emailhandle = (text) => {
        this.setState({ email: text })
    }
    submit = () => {
        if (this.state.email == '') {
            ToastAndroid.show("邮箱不能为空", 100)
        }
        else {
            var userdata = [{}]
            userdata[0] = this.state.data
            userdata[0].email = this.state.email
            var options = '?username=' + userdata[0].username + '&email=' + userdata[0].email + '&address=' + userdata[0].address +
                '&userid=' + userdata[0].userid
            console.log(userdata)
            fetch(url + options, {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain'
                },
            })
                .then((res) => res.json())
                .then((res) => {
                    console.log(res)
                    AsyncStorage.setItem('user', JSON.stringify(userdata))
                        .then(() => {
                            Actions.pop({ refresh: ({ 'key': userdata }) })
                        })
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    }
    render() {
        return (
            <View style={styles.box}>
                <View style={styles.inputbox}>
                    <Text>邮箱:</Text>
                    <TextInput
                        placeholder={this.state.data.email}
                        style={styles.input}
                        placeholderTextColor={'#ccc'}
                    onChangeText={this.emailhandle} />
                </View>
                <TouchableOpacity style={styles.submit}
                    onPress={this.submit}>
                    <Text>
                        完成
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles=StyleSheet.create({
    box:{
        width:'100%',
        height:'100%',
        flexDirection:'column',
        alignItems:'center'
    },
    inputbox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'white',
        width:'100%',
        height:'8%',
        paddingLeft:25
    },
    submit:{ 
        marginTop: 40,
        width: '60%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "yellow"
    },
        input:{
            marginTop:2,
            height:'80%',
            width:'100%',
        }
        
})
