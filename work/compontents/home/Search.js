import React, { Component } from 'react'
import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    View,
    Text,
    Button,
    StatusBar,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
} from 'react-native';
import SearchBar from 'react-native-searchbar';
import Icon from 'react-native-vector-icons/AntDesign';
import { Actions } from 'react-native-router-flux';

export default class Search extends Component {
    constructor() {
        super()
        this.state = {
            results:[],
            data:[],
            notfind:0
        }
    }
    componentDidMount(){
        fetch("http://zy.eatclub.wang:3000/list/office")
            .then((res) => res.json())
            .then((res) => {
                var arr=[]
                var obj={}
                for(var i=0;i<res.data.length;i++){
                    obj.id=res.data[i].officeid
                    obj.name=res.data[i].officename
                    obj.city=res.data[i].city
                    obj.type=res.data[i].t
                    arr.push(obj)
                    obj={}
                }
                fetch("http://zy.eatclub.wang:3000/list/sr")
                .then((res) => res.json())
                .then((res) => {
                    for(var i=0;i<res.data.length;i++){
                        obj.id=res.data[i].srid
                        obj.name=res.data[i].srname
                        obj.city=res.data[i].city
                        obj.type=res.data[i].t
                        arr.push(obj)
                        obj={}
                    }
                    this.setState({
                        data: arr
                    });
                })
            })
    }
    _handleResults = (results) => {
        this.setState({
            results:results
        })
        console.log(results)
    }
    _submit=()=>{
        if(this.state.results[0]==undefined){
            ToastAndroid.show("搜索无结果",300)
        }
        else{
            if(this.state.results[0].type==0){
                Actions.sr({ 'srid': this.state.results[0].id })
            }
            else{
                Actions.office({ 'officeid': this.state.results[0].id})
            }
        }
    }
    render() {
        return (
            <View style={styles.box}>
                <SearchBar
                    ref={(ref) => this.searchBar = ref}
                    data={this.state.data}
                    handleResults={this._handleResults}
                    showOnLoad
                    onSubmitEditing={()=>{this._submit()}}
                    onBack={()=>{Actions.pop()}}
                />
               
                
            {/* {this.state.notfind?(
            <View style={styles.unfind}><Text style={styles.font}>搜索无结果。。。</Text></View>
            ):(null)} */}
            <View style={styles.list}>
                {this.state.results.map((data,i)=>(
                     <TouchableOpacity style={styles.item}
                     onPress={()=>{
                        if(data.type==0){
                            Actions.sr({ 'srid': data.id })
                        }
                        else{
                            Actions.office({ 'officeid': data.id})
                        }
                     }}>
                     <Text>{data.name}</Text>
                <Text>{data.city}</Text>
                 </TouchableOpacity>
                ))}
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    box:{
        width:'100%',
    },
    touch:{
        width: '100%',
        height: 40,
        marginLeft: 10,
        flexDirection: 'row',
        borderRadius: 20,
        paddingLeft: 10,
        marginTop: 10,
        borderWidth: 0.5,
        alignItems: 'center'
    },
    list:{
        flexDirection:'column',
        width:'100%',
        marginTop:60
    },
    item:{
        padding:15,
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:60,
        backgroundColor:'white'
    },
    unfind:{
        width:'100%',
        height:'100%',
        backgroundColor:'white',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    font:{
        color:'#ccc'
    },
});
