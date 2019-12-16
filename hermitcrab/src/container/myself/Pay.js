import React, { Component } from 'react'
import { Button, WhiteSpace, WingBlank } from 'antd-mobile';
import axios from '../../model/axios'
import store from '../../store';
export default class Pay extends Component {
    back=()=>{
        window.location.hash="myself/order"
    }
    pay=()=>{
        axios({
            url: 'http://zy.eatclub.wang:3000/pay',
            method: 'get',
            responsetype: 'json',
            params: {
                srid:this.props.location.search.charAt(1),
                userid:store.getState().login.userid
            }
        })
            .then((response) => {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
        window.location.hash="myself/order"
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={()=>{this.pay()}}>确认付款</Button><WhiteSpace />
                <Button type="warning" onClick={()=>this.back()}>返回</Button><WhiteSpace />
            </div>
        )
    }
}
