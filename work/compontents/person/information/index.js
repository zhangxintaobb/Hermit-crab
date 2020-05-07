import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity,TouchableHighlight, } from 'react-native'
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
const list = [
    { name: '手机号码', data: '15960266038', jump: () => Actions.information_userphone },
    { name: '昵称', data: '大佬逼', jump: () => Actions.information_username },
    { name: '邮箱', data: '3061573009@qq.com', jump: () => Actions.information_useremail }
]
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typeName: '性别',
            type: 0,
            showTypePop: false,
        }
    }

    _openTypeDialog() {
        this.setState({showTypePop: !this.state.showTypePop})
    }
    render() {
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
                    style={styles.submit}>
                    <Text>确认修改</Text>
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