import React, { Component } from 'react'
import { Button, NavBar, Icon, Flex, WhiteSpace, WingBlank, List } from 'antd-mobile';
import {Redirect} from "react-router-dom"
var order = [
    {
        id:0,
        img: '/zxt_image/room2.jpg',
        name: '我想静静自习室（万象城店）',
        price: '200',
        status: true,
        num: 2
    },
    {
        id:1,
        img: '/zxt_image/room1.jpg',
        name: '阿猫自习室',
        price: '1000',
        status: false,
        num: 1
    }
]
export default class Order extends Component {
    constructor(){
        super()
        this.state={
        // 设置页面id
          id:'order',
        // 设置返回时跳转的页面
          link:"4",
        // 设置是否返回跳转
          back:false,
        }
      }
    //跳转支付页面
    pay = () => {
        window.location.href="#/pay"
    }
    //跳转评价页面
    comment=(item)=>{
        console.log(item.item.id)
        var id=item.item.id
        window.location.hash='/myself/comment?'+id
    }
    render() {
        //如果back为真，跳回个人信息页面
        if(this.state.back){
            return (<Redirect to={{
              pathname:'/login',
              state:this.state
            }} />)
          }
        //如果back为否，显示以下内容
        return (
            <div>
                {/* 头部 */}
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    // 如果点击返回，回调函数，back为真
                    onLeftClick={() => {this.setState({
                        back:true
                    }) }}
                >租赁记录</NavBar>
                    {/* 将数据库中的数据取出，循环数组 */}
                {order.map(item => (
                    <div style={{ borderRadius: '20px', width: '100%', backgroundColor: 'white' }}>
                        {/* 判断是否支付 */}
                        {item.status ? (
                            // 如果未支付  
                            <div onClick={() => { this.pay() }}>
                                <div
                                    style={{
                                        backgroundColor: 'white',
                                        lineHeight: '35px',
                                        color: '#888',
                                        fontSize: 14,
                                    }}
                                >
                                    <WingBlank>
                                        <h4 style={{ display: 'inline-block' }}>{item.name}</h4>
                                        <p style={{ display: 'inline-block', float: 'right' }}>待付款</p>
                                    </WingBlank>
                                </div>
                                <div>
                                    <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
                                        <List.Item
                                            extra={<Button type="ghost" size="small" inline>付款</Button>}
                                            multipleLine
                                        >
                                            <img style={{
                                                width: '54px',
                                                height: '54px',
                                                marginRight: '15px',
                                                borderRadius: '5px',
                                                float:'left'
                                            }} src={item.img} alt="" />
                                            <List.Item.Brief style={{display:'inline-block',float:'left'}}>
                                            <h6>总价：{item.price}</h6>
                                            <List.Item.Brief style={{display:'inline-block'}}>
                                            <h6>数量：{item.num}</h6>
                                            </List.Item.Brief>
                                            </List.Item.Brief>
                                        </List.Item>
                                    </List>
                                </div>
                            </div>
                        ) : (
                            // 如果已支付
                            <div onClick={()=>{this.comment({item})}}>
                                <div
                                    style={{
                                        backgroundColor: 'white',
                                        lineHeight: '35px',
                                        color: '#888',
                                        fontSize: 14,
                                    }}
                                >
                                    <WingBlank>
                                        <h4 style={{ display: 'inline-block' }}>{item.name}</h4>
                                        <p style={{ display: 'inline-block', float: 'right' }}>待评价</p>
                                    </WingBlank>
                                </div>
                                <div>
                                    <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
                                        <List.Item
                                            extra={<Button type="ghost" size="small" inline>评价</Button>}
                                            multipleLine
                                        >
                                            <img style={{
                                                width: '54px',
                                                height: '54px',
                                                marginRight: '15px',
                                                borderRadius: '5px',
                                                float:'left'
                                            }} src={item.img} alt="" />
                                            <List.Item.Brief style={{display:'inline-block',float:'left'}}>
                                            <h6>总价：{item.price}</h6>
                                            <List.Item.Brief style={{display:'inline-block'}}>
                                            <h6>数量：{item.num}</h6>
                                            </List.Item.Brief>
                                            </List.Item.Brief>
                                        </List.Item>
                                    </List>
                                </div>
                            </div>
                            )}
                    </div>
                ))}
            </div>
        )
    }
}
