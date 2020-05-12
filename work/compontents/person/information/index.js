import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,TouchableHighlight, AsyncStorage,DeviceEventEmitter } from 'react-native'
import {
    ListItem,
    List
} from 'native-base';
import {
    Actions
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import CustomAlertDialog from "./CustomAlertDialog";
const typeArr = ["不限", "男", "女"];

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeName: '性别',
            type: 0,
            showTypePop: false,
            address:'',
            username:'',
            email:'',
            sex:''
        }
    }
    componentDidMount(){
        AsyncStorage.getItem('user')
        .then((res)=>{
            let data=JSON.parse(res)
            // console.log(data[0])
            this.setState({
                address:data[0].address,
                username:data[0].username,
                email:data[0].email,
                sex:data[0].sex
            })
        })
        
    }
    _openTypeDialog() {
        this.setState({showTypePop: !this.state.showTypePop})
    }
    render() {
        const list = [
            { name: '地址', jump: () => Actions.information_useraddress,data:this.state.address },
            { name: '昵称', jump: () => Actions.information_username,data:this.state.username },
            { name: '邮箱', jump: () => Actions.information_useremail,data:this.state.email }
        ]
        return (
            <View style={styles.box}>
                <View style={styles.top}>
                    <List>
                        {list.map((data, i) => (
                            <ListItem>
                                <TouchableOpacity style={styles.container} onPress={data.jump()}>
                                    <Text>{data.name}</Text>
                                    <View style={styles.right}>
                                        <Text>{data.data}  </Text>
                                        <Icon size={14}
                                            color={'#ccc'}
                                            name="right" />
                                    </View>
                                </TouchableOpacity>
                            </ListItem>
                        ))}
                        <ListItem>
                            

                                <TouchableOpacity onPress={() => this._openTypeDialog()} style={styles.container}
                                    underlayColor="#a5a5a5">
                                    <Text>性别</Text>
                                    <View style={styles.right}>
                                    <Text>{this.state.typeName}-{this.state.type}</Text>
                                        <Icon size={14}
                                            color={'#ccc'}
                                            name="right" />
                                    </View>
                                </TouchableOpacity>

                                <CustomAlertDialog entityList={typeArr} callback={(i) => {
                                    this.setState({
                                        type: i,
                                        typeName: typeArr[i],
                                    })
                                }} show={this.state.showTypePop} closeModal={(show) => {
                                    this.setState({
                                        showTypePop: show
                                    })
                                }} />
                        </ListItem>
                    </List>
                </View>
                <TouchableOpacity
                    style={styles.submit}
                    onPress={() => {
                        this.props.navigation.navigate('person');
                        // 这里的param可以不写
                        DeviceEventEmitter.emit("EventType");
                    }}>
                    <Text>返回</Text>
                </TouchableOpacity>
            </View>


        )
    }
}
const styles = StyleSheet.create({
    box: {

        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
        marginTop: 15,
    },
    top: {

        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        paddingBottom: 15
    },
    container: {
        width: '100%',
        height: '200%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    right: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        margin: 3,
        padding: 10,
    },
    submit: {
        marginTop: 280,
        width: '60%',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 80,
        backgroundColor: "#009688",
    }
});