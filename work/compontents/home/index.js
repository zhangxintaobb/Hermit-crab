import React, { Component } from 'react'
import { Text, 
    View, 
    TextInput, 
    StyleSheet, 
    Dimensions, 
    ScrollView, 
    Image, 
    FlatList, 
    TouchableOpacity, 
    DeviceEventEmitter,
    AsyncStorage, } from 'react-native'
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import Button from 'react-native-button';
import { black } from 'color-name';
import Swiper from 'react-native-swiper';
import RNLocation from 'react-native-location';
import Load from '../load';
import Search from './Search'
const { width, height } = Dimensions.get('window')
const city = [
    { cityname: '石家庄', uri: require('../../assets/zxt/City/city1.jpg') },
    { cityname: '上海', uri: require('../../assets/zxt/City/city2.jpg') },
    { cityname: '广东', uri: require('../../assets/zxt/City/city3.jpg') },
    { cityname: '深圳', uri: require('../../assets/zxt/City/city4.jpg') },
    { cityname: '北京', uri: require('../../assets/zxt/City/city5.jpg') }
]
const url = 'http://zy.eatclub.wang:3000/list/sr'
export default class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            city: '石家庄',
            longitude: '',
            latitude: '',
            alldata:[],
            showdata:[],
            isloading: false,
        }
    }
    fixPosition = () => {
        RNLocation.configure({ distanceFilter: null });
        RNLocation.getLatestLocation({ timeout: 60000 })
            .then(latestLocation => {
                fetch('http://restapi.amap.com/v3/geocode/regeo?key=1d4c7b76e61b49cc7f8142075b84d6c9&location=' +
                    latestLocation.longitude + ',' + latestLocation.latitude + '&radius=1000&extensions=all&batch=false&roadlevel=0', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: ``
                })
                    .then((response) => response.json())
                    .then((jsonData) => {
                        try {
                            this.setState({
                                city: jsonData.regeocode.addressComponent.city
                            });
                            this._request(jsonData.regeocode.addressComponent.city)
                        }
                        catch (e) {

                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            })
    }
    
    componentDidMount() {
        this.fixPosition()
        this.subscription = DeviceEventEmitter.addListener("City", (param) => {
            this.setState({
                city: param
            })
            this._request(param)
        })
        
    }

    componentWillUnmount() {
        this.subscription.remove();
    }

    _request=(city)=>{
        this.setState({
            isloading:true
        })
        fetch(url,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'text/plain'
                },
            }
        )
            .then((res) => res.json())
            .then((res) => {
                // console.log(res.data)
                var arr=[]
                for(var i=0;i<res.data.length;i++){
                    if(city==res.data[i].city)
                    {
                        if(arr.length<3){
                            arr.push(res.data[i])
                        }
                    }
                }
                this.setState({
                    showdata:arr,
                    isloading:false
                })
            })
            .catch(function (err) {
                console.log(err);
            })
    }
    switchCity = (data) => {
        var citydata = data
        this.setState({
            city: citydata
        })
        this._request(data)
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                 {this.state.isloading?<Load spinkerType="Circle" />:null}
                <ScrollView>
                    <View style={{ flexDirection: 'row', height: 60, justifyContent: "center", backgroundColor: '#fff' }}>
                        <TouchableOpacity
                            style={{ justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => { this.fixPosition() }}
                            >
                            <Icon
                                size={25}
                                color="#33CC99"
                                name="enviroment"
                            />
                            <Text>{this.state.city}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{
                            width: '80%',
                            height: 40,
                            backgroundColor: '',
                            marginLeft: 10,
                            flexDirection: 'row',
                            borderRadius: 20,
                            paddingLeft: 10,
                            marginTop: 10,
                            borderWidth: 0.5,
                            alignItems: 'center'
                        }}
                        onPress={Actions.search}>
                            <Icon size={20} color="#33CC99"
                                name="search1"
                            />
                            {/* <TextInput placeholder='请输入关键字'
                            /> */}
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={Actions.notify}
                            style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                            <Icon size={25}
                                name="bells"
                            />
                        </TouchableOpacity>
                    </View>
                    
                    <Swiper
                        style={styles.wrap}
                        autoplay={true}
                        autoplayTimeout={3}
                    >
                        <View style={styles.slide}>
                            <Image style={styles.pic1} source={require('../../assets/zxt/Swipe/b_1.jpg')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.pic1} source={require('../../assets/zxt/Swipe/b_2.jpg')} />
                        </View>
                        <View style={styles.slide}>
                            <Image style={styles.pic1} source={require('../../assets/zxt/Swipe/b_3.jpg')} />
                        </View>
                    </Swiper>
                    <View style={{
                        alignItems:'center',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap',
                            paddingTop: 5,
                            paddingBottom: 10,
                            width: '98%',
                            marginTop: 15,
                            marginBottom: 10,
                            backgroundColor: '#CCC',
                            borderRadius:10
                        }}>
                            <View style={{
                                width: '100%',
                                height: 30,
                                paddingLeft: 15,
                                marginBottom: 10,
                                justifyContent: 'center',
                                borderBottomColor: 'white',
                                borderBottomWidth: 1,
                            }}>
                                <TouchableOpacity onPress={Actions.city}>
                                    <Text>查看更多热门城市>></Text>
                                </TouchableOpacity>
                            </View>
                            {city.map((data, i) => (
                                <TouchableOpacity style={styles.box1} onPress={() => { this.switchCity(data.cityname) }}>
                                    <Image style={{ width: 50, height: 50, borderRadius: 35 }} source={data.uri} />
                                    <Text>{data.cityname}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        
                        <View style={styles.listbox}>
                            <View style={styles.head}>
                             <Text>猜你喜欢</Text>
                            </View>
                           
                            {this.state.showdata[0]==undefined?
                        (<View style={styles.unlist}>
                            <Text>该城市无拓展业务</Text>
                        </View>)
                        :
                        this.state.showdata.map((data,i)=>(
                                <TouchableOpacity 
                                style={styles.listitem}
                                onPress={() =>  Actions.sr({ 'srid': data.srid })}>
                                <Image
                                    source={require('../../assets/qjx/guoda.jpg')}
                                    style={styles.pic}
                                />
                                <View style={{ width: width * 0.3, }}>
                                    <Text style={styles.title}>{data.srname}</Text>
                        <Text style={{ fontSize: 12, color: '#bbb', marginTop: 10 }}>{data.sraddress}</Text>
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
                        <Text style={styles.price}>￥{data.price}</Text>
                                    <Text>/天</Text>
                                </View>
                            </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => Actions.find()}>
                        <Text style={{ color: '#fff', fontSize: 16 }}>点击查看更多</Text>
                    </TouchableOpacity>
                </ScrollView>
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
    head:{
        width:'100%',
        height:30,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
    },
    listbox:{
        width:'100%',
        
        alignItems:'center',
    },
    pic1: {
        height: 200,
        width: '100%'
    },
    button: {
        backgroundColor: '#33CC99',
        width: '90%',
        height: 50,
        marginLeft: '5%',
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 20
    },
    slide: {
        width: width,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    box: {
        width: 215,
        paddingLeft: 10,
        marginRight: 70
    },
    box1: {
        alignItems: 'center'
    },
    box2: {
        marginLeft: 50,
        marginTop: 5
    },
    listitem: {
        display: 'flex',
        height: height * 1 / 6,
        width: width * 0.9,
        margin: 0,
        marginTop: 10,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row',
        borderWidth: 0.5
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
    },
    wrap:{
        height:200
    }
})
