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
} from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import { Tabs } from '@ant-design/react-native';

const { width, height } = Dimensions.get('window');

export default class index extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    componentDidMount() {
        fetch('http://zy.eatclub.wang:3000/list/usercomment?userid=21')
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
            })
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
                        data={[1, 2, 3, 4]}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) =>
                            <View style={styles.box}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View>
                                        <Text>2020/04/22</Text>
                                        <View style={{ height: 55 }}>
                                            <Text>感觉位置不错，环境也挺好的</Text>
                                        </View>
                                    </View>
                                    <TouchableOpacity>
                                        <Icon
                                            name='close'
                                            size={30}
                                            color='red'
                                        />
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.img}>
                                    <Image
                                        source={require('../../assets/qjx/beida.jpg')}
                                        style={{ width: '30%', height: 80 }}
                                    />
                                    <View style={{ width: '70%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text>国大自习室</Text>
                                        <Text>租赁#业主001</Text>
                                    </View>
                                </View>
                            </View>
                        }
                    />
                    <TouchableOpacity style={styles.button}>
                        <Text style={{ color: '#fff' }}>查看更多</Text>
                    </TouchableOpacity>
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