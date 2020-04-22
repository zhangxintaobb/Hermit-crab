import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import Tabs from '@ant-design/react-native';

const { width, height } = Dimensions.get('window');

export default class index extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    componentDidMount() {
        fetch("http://zy.eatclub.wang:3000/list/office")
            .then((res) => res.json())
            .then((res) => {
                // console.log(res);
                this.setState({
                    data: res.data
                });
            })
    }

    render() {
        // const tabs = [
        //     { title: 'First Tab' },
        //     { title: 'Second Tab' },
        //     { title: 'Third Tab' },
        // ];
        // const style = {
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //     height: 150,
        //     backgroundColor: '#fff',
        // };
        return (
            <View>
                {/* <Tabs tabs={tabs}>
                    <View style={style}>
                        <Text>Content of First Tab</Text>
                    </View>
                    <View style={style}>
                        <Text>Content of Second Tab</Text>
                    </View>
                    <View style={style}>
                        <Text>Content of Third Tab</Text>
                    </View>
                </Tabs> */}
                <ScrollView>
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={styles.listitem}>
                                <Image
                                    source={{ uri: item.img_url }}
                                    style={styles.pic}
                                />
                                <View style={{ width: width * 0.3, }}>
                                    <Text style={styles.title}>{item.officename}</Text>
                                    <Text style={{ fontSize: 12, color: '#bbb', marginTop: 10 }}>{item.city},{item.region}</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
                                        <Icon
                                            size={15}
                                            color={'#f23636'}
                                            name="enviromento"
                                        />
                                        <Text style={{ fontSize: 12, color: '#bbb' }}>距离2KM</Text>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 15 }}>
                                        <Icon
                                            size={20}
                                            color={'#f23636'}
                                            name="star"
                                        />
                                        <Icon
                                            size={20}
                                            color={'#f23636'}
                                            name="star"
                                        />
                                        <Icon
                                            size={20}
                                            color={'#f23636'}
                                            name="star"
                                        />
                                        <Icon
                                            size={20}
                                            color={'#f23636'}
                                            name="star"
                                        />
                                        <Icon
                                            size={20}
                                            color={'#f23636'}
                                            name="staro"
                                        />
                                    </View>
                                </View>
                                <View style={{ marginLeft: 10 }}>
                                    <Text style={styles.price}>￥{item.price}</Text>
                                    <Text>/天</Text>
                                </View>
                            </TouchableOpacity>
                        }
                    />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listitem: {
        display: 'flex',
        height: height * 1 / 6,
        width: width * 0.9,
        marginLeft: width * 0.05,
        margin: 0,
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row'
    },
    pic: {
        width: width * 0.4,
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 10
    },
    title: {
        height: '25%',
        fontSize: 14,
        marginTop: 5,
    },
    price: {
        fontSize: 14,
        marginTop: 5,
        fontWeight: 'bold'
    }
})