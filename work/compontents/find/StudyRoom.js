import React, { Component } from 'react'
import { Text, View, StyleSheet, Dimensions, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import Swiper from 'react-native-swiper';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from "react-native-router-flux";


const { width, height } = Dimensions.get('window');

export default class StudyRoom extends Component {
    constructor() {
        super();
        this.state = {
            data: {},
            comment: []
        }
    }

    componentDidMount() {
        fetch("http://zy.eatclub.wang:3000/list/sr/detail?id=" + this.props.srid)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res.data[0]);
                this.setState({
                    data: res.data[0]
                });
                console.log(this.state.data)
            })
        fetch("http://zy.eatclub.wang:3000/list/roomcomment?type=0&userid=" + this.props.srid)
            .then((res) => res.json())
            .then((res) => {
                // console.log(res.data)
                var arr = []
                for (var i = 0; i < res.data.length; i++) {
                    let obj = { 'container': res.data[i].container, 'createtime': res.data[i].createtime, 'star': res.data[i].star }
                    fetch('http://zy.eatclub.wang:3000/userinfo?userid=' + res.data[i].userid)
                        .then((res) => res.json())
                        .then((res) => {

                            obj.name = res.data[0].username
                            obj.img = res.data[0].avatar
                            arr = this.state.comment
                            if (arr.length < 3) {
                                arr.push(obj)
                                this.setState({
                                    comment: arr
                                })
                            }
                        })
                }
            })
    }


    render() {
        // { console.log(this.state.comment) }
        return (
            <View style={{ flex: 1, backgroundColor: '#ffffff', }}>
                <ScrollView>
                    <View style={{ height: width * 0.43, width: width }}>
                        <Swiper
                            style={styles.wrap}
                            autoplay={true}
                            dotStyle={styles.dot}
                            activeDotStyle={styles.dota}
                        >
                            <View style={styles.slide1}>
                                <Image
                                    source={{ uri: this.state.data.img_url }}
                                    style={{ width: width, height: width * 0.43 }}
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    source={{ uri: this.state.data.img_url }}
                                    style={{ width: width, height: width * 0.43 }}
                                />
                            </View>
                        </Swiper>
                    </View>
                    <View style={styles.container}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.title}>
                                <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#2C3E50' }}>{this.state.data.srname}</Text>
                                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                                    <Text style={{ fontSize: 12, color: '#2C3E50' }}>{this.state.data.city},{this.state.data.region}</Text>
                                    <Icon
                                        size={15}
                                        color={'#0099CC'}
                                        name="enviromento"
                                        style={{ marginLeft: 20 }}
                                    />
                                    <Text style={{ fontSize: 12, color: '#2C3E50' }}>距离2KM</Text>
                                </View>
                            </View>
                            <View style={styles.price}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#2C3E50' }}>￥ {this.state.data.price}</Text>
                                <Text style={{ fontSize: 18, color: '#2C3E50' }}>/天</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={{ color: '#aaa' }}>介绍</Text>
                            <Text style={{ color: '#2C3E50', marginTop: 5 }}>{this.state.data.detail}</Text>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            
                            {this.state.comment[0]==undefined?
                        (<View style={styles.unlist}>
                            <Text>暂无评论</Text>
                        </View>):(
                            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <Text style={{ color: '#aaa' }}>{this.state.comment.length}</Text>
                            <TouchableOpacity
                                style={{ marginLeft: 280 }}
                                onPress={() => Actions.comment({ 'srid': this.props.srid })}
                            >
                                <Text style={{ color: '#0099CC' }}>查看全部</Text>
                            </TouchableOpacity>
                        </View>
                        )}
                            {this.state.comment.map((data,i)=>(
                                 <View style={styles.pinglun}>
                                 <View style={{ flexDirection: 'row' }}>
                                     <Image
                                         style={{ width: 50, height: 50, borderRadius: 25 }}
                                         source={require('../../assets/zy/pinglunAvatar.jpeg')}
                                     />
                                     <View style={{ marginLeft: 5 }}>
                                         <Text>Daniel Hua</Text>
                                         <Text style={{ fontSize: 12, color: '#aaa' }}>1小时前</Text>
                                     </View>
                                     <View style={{ marginLeft: 200 }}>
                                         <Text style={{ marginLeft: 50 }}>8.0</Text>
                                         <View style={{ flexDirection: 'row' }}>
                                             <Icon
                                                 size={15}
                                                 color={'#0099CC'}
                                                 name="star"
                                             />
                                             <Icon
                                                 size={15}
                                                 color={'#0099CC'}
                                                 name="star"
                                             />
                                             <Icon
                                                 size={15}
                                                 color={'#0099CC'}
                                                 name="star"
                                             />
                                             <Icon
                                                 size={15}
                                                 color={'#0099CC'}
                                                 name="star"
                                             />
                                             <Icon
                                                 size={15}
                                                 color={'#0099CC'}
                                                 name="staro"
                                             />
                                         </View>
                                     </View>
                                 </View>
                                 <View>
                                     <Text style={{ color: '#aaa', marginTop: 5 }}>这是一个非常棒的地方，环境很安静，推荐给大家。</Text>
                                 </View>
                             </View>
                            ))}
                            
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.footbar}>
                    <TouchableOpacity style={styles.sbutton}>
                        <Icon
                            size={20}
                            color={'#0099CC'}
                            name="sharealt"
                            style={{ marginLeft: 3 }}
                        />
                        <Text style={{ color: '#2C3E50' }}>分享</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sbutton}>
                        <Icon
                            size={20}
                            color={'#0099CC'}
                            name="customerservice"
                            style={{ marginLeft: 3 }}
                        />
                        <Text style={{ color: '#2C3E50' }}>客服</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.sbutton}>
                        <Icon
                            size={20}
                            color={'#0099CC'}
                            name="hearto"
                            style={{ marginLeft: 3 }}
                        />
                        <Text style={{ color: '#2C3E50' }}>收藏</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.bbutton}
                        onPress={() => Actions.order({ 'data': this.state.data })}
                    >
                        <Text style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 14 }}>下单</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    unlist:{
        width:'100%',
        height:250,
        backgroundColor:'#ccc',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        borderRadius:15
    },
    footbar: {
        width: width,
        height: 60,
        backgroundColor: '#CCCCCC',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    wrap: {
        height: 220,
    },
    img1: {
        width: width,
        height: 220,
        resizeMode: 'cover',
        flex: 1
    },
    dota: {
        backgroundColor: "#0099CC"
    },
    dot: {
        backgroundColor: "white"
    },
    container: {
        // height:500,
        width: width * 0.9,
        backgroundColor: '#ffffff',
        marginLeft: width * 0.05,
        display: 'flex',
        marginTop: 15
    },
    title: {
        width: '30%'
    },
    price: {
        marginLeft: 220,
    },
    pinglun: {
        marginTop: 10,
        borderTopWidth: 0.5,
        borderTopColor: '#aaa',
        paddingTop: 5
    },
    sbutton: {
        marginLeft: 10,
        marginRight: 10
    },
    bbutton: {
        width: 120,
        height: 40,
        backgroundColor: '#0099CC',
        borderRadius: 20,
        marginLeft: 200,
        alignItems: "center",
        justifyContent: 'center',
    }

});