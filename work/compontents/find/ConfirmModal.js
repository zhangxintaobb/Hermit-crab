import React, { Component } from 'react'
import { Text, 
    View, 
    Dimensions, 
    ScrollView, 
    StyleSheet, 
    Image, 
    FlatList, 
    TouchableOpacity,
    Modal,
    Platform, } from 'react-native'
export class ConfirmModal extends React.Component{

    constructor( props ){
        super( props );
        this.state = {
            modalVisible: false, 
            tip:          '默认的提示',
        }
    }
    /*打开弹窗口*/
    _open( tip ){
        this.setState( { modalVisible:true ,tip:tip } )
    }
    /*关闭弹窗口*/
    _close(){
        this.setState( { modalVisible:false,tip:'默认的提示' } )
    }
    
    render(){
        let {
            animationType  = 'fade',      //运动形式
            confirmFunc    = function(){}, //确认按钮需要执行的函数
            cancel = function(){},
            opacity        = 0.5
        } = this.props;
        return (
            <Modal
                animationType={ animationType }
                transparent={true}
                visible={this.state.modalVisible}
                onRequestClose={() => {alert("Modal has been closed.")}}
            >
                <View style={{flex:1, marginTop: 22, justifyContent: 'center', alignItems: 'center'}}>
                    <View style = { [styles.loadingContainer,{justifyContent: 'flex-start', opacity:opacity }] }>
                        <View style = { styles.text }>
                            <Text style = {{color:"#fff"}}>{ this.state.tip }</Text>
                        </View>
                        <View style = { styles.btnContainer }>
                            <TouchableOpacity style={{flex:1,}} >
                                <TouchableOpacity 
                                onPress ={this._close.bind(this)}
                                style = { [ styles.btn, { borderLeftWidth:0 }] }>
                                    <Text style = {{color:"#fff"}}>确定</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flex:1,}}
                            >
                                <TouchableOpacity 
                                onPress ={this._close.bind(this)}
                                style={ [ styles.btn, { borderRightWidth:0 } ] }>
                                    <Text style = {{color:"#fff"}}>取消</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        )
    }
}




const styles = StyleSheet.create({
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