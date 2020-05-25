import React, { Component } from 'react'
import { Text,AsyncStorage, View, Dimensions, ScrollView, StyleSheet, Image, FlatList, TouchableOpacity,Platform,Modal, } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { ConfirmModal } from './ConfirmModal'
import { Actions } from 'react-native-router-flux';

const { width, height } = Dimensions.get('window');
const url='http://zy.eatclub.wang:3000/createorder?'
export default class Order extends Component {
    constructor() {
        super();
        this.state = {
            userid:'',
            box:true
        };
    }
    componentDidMount(){
        AsyncStorage.getItem('user')
        .then((res)=>{
            let data=JSON.parse(res)
            this.setState({
                userid:data[0].userid,
            })
        })
        .catch(function (err) {
            console.log(err);
        })
    }
        
        _addorder=()=>{
            
            if(this.props.data.officeid==undefined){
                var str='state=1&type='+this.props.data.t+'&roomid='+this.props.data.srid+'&userid='+this.state.userid
                +'&number=1'+'&rental='+this.props.data.price
            }
            else{
                var str='state=1&type='+this.props.data.t+'&roomid='+this.props.data.officeid+'&userid='+this.state.userid
                +'&number=1'+'&rental='+this.props.data.price
            }
            fetch(url+str)
            Actions.unuse()
        }
        _cancerorder=()=>{
            if(this.props.data.officeid==undefined){
                var str='state=0&type='+this.props.data.t+'&roomid='+this.props.data.srid+'&userid='+this.state.userid
                +'&number=1'+'&rental='+this.props.data.price
            }
            else{
                var str='state=0&type='+this.props.data.t+'&roomid='+this.props.data.officeid+'&userid='+this.state.userid
                +'&number=1'+'&rental='+this.props.data.price
            }
            fetch(url+str)
            Actions.unpay()
        }
    render() {
        // {console.log(this.props.data)}
        return (
            <View style={{ flex: 1 }}>
                <View style={styles.box}>
                    <View style={styles.detail}>
                        <View style={styles.detail_font}>
                            <Text style={{ fontSize: 20 }}>{this.props.data.srname || this.props.data.officename}</Text>
                            <Text style={{ fontSize: 14, marginTop: 10 }}>{this.props.data.price} 元/天</Text>
                        </View>
                        <Image
                            source={{ uri: this.props.data.img_url }}
                            style={styles.pic}
                        />
                    </View>
                    <View style={styles.price}>
                        <View>
                            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>现在支付 (<Text style={{ color: '#0099CC' }}>CNY</Text>)</Text>
                            <Text style={{ color: '#0099CC', marginTop: 5 }}>价格详情</Text>
                        </View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginLeft: 280 }}>￥{this.props.data.price}</Text>
                    </View>
                    <View style={styles.pay}>
                        <Icon
                            size={40}
                            color={'#108ee9'}
                            name="alipay-square"
                        />
                        <Text style={styles.pay_font}>支付宝支付</Text>
                    </View>
                    <View style={styles.pay}>
                        <Icon
                            size={40}
                            color={'#439057'}
                            name="wechat"
                        />
                        <Text style={styles.pay_font}>微信支付</Text>
                    </View>
                    <View style={styles.pay}>
                        <Icon
                            size={40}
                            color={'#FFD700'}
                            name="pay-circle1"
                        />
                        <Text style={styles.pay_font}>到店支付</Text>
                    </View>
                    <TouchableOpacity style={{marginTop:10,height:height*0.15,borderBottomColor: '#aaa',borderBottomWidth: 0.5}}>
                        <Text style={{fontWeight:'bold'}}>其他支付方式></Text>
                    </TouchableOpacity>

                    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly'}}>
                    <TouchableOpacity style={styles.button} onPress={()=>{this._addorder()}} >
                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:14}}>确认预定 ￥{this.props.data.price}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={()=>{this._cancerorder()}} >
                        <Text style={{color:'#fff',fontWeight:'bold',fontSize:14}}>放弃预定</Text>
                    </TouchableOpacity>
                    </View>
                    
                    
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    box: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        backgroundColor: '#fff',
        
    },
    detail: {
        flexDirection: 'row',
        height: height * 0.15,
        paddingBottom: 20,
        borderBottomColor: '#aaa',
        borderBottomWidth: 0.5
    },
    detail_font: {
        width: '50%',
        marginTop: 10
    },
    pic: {
        width: '30%',
        height: '100%',
        marginLeft: '20%'
    },
    price: {
        height: height * 0.1,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        borderBottomColor: '#aaa',
        borderBottomWidth: 0.5
    },
    pay: {
        height: height * 0.12,
        paddingTop: 20,
        paddingBottom: 20,
        flexDirection: 'row',
        borderBottomColor: '#aaa',
        borderBottomWidth: 0.5,
        alignItems:'center'
    },
    pay_font:{
        marginLeft:30,
        fontSize:20,
        fontWeight:'bold'
    },
    button:{
        width:'45%',
        height: 60,
        backgroundColor:'#FF6347',
        marginTop:20,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    loadingContainer:{
        position:'relative',
        width:180,
        height:100,
        borderRadius:10,
        backgroundColor:'#000',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    parent:{
        justifyContent:'center',
        alignItems:'center'
    },
    imageContainer:{
        width:30,
        height:30,
        backgroundColor:'#fff',
        borderRadius:15,
        overflow:'hidden'
    },
    icon:{
        width:'100%',
        height:'100%'
    },
    text:{
        height:60,
        justifyContent:'center',
        alignItems:'center'
    },
    btnContainer:{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:40,
        flexDirection:'row',
    },
    btn:{
        flex:1,
        justifyContent: 'center', 
        alignItems: 'center',
        fontSize:16,
        borderWidth:1,
        borderColor:'#fff'
    }
})
