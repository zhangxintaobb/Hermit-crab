import React, { Component } from 'react'
import { Button, NavBar, Icon, Flex, WhiteSpace, WingBlank, List } from 'antd-mobile';

var order = [
    {
        img: '/zxt_image/room2.jpg',
        name: '我想静静自习室（万象城店）',
        price: '200',
        status: true,
        num: 2
    },
    {
        img: '/zxt_image/room1.jpg',
        name: '阿猫自习室',
        price: '1000',
        status: false,
        num: 1
    }
]
export default class Order extends Component {
    pay = () => {
        window.location.href="#/pay"
    }
    comment=()=>{
        window.location.hash='/myself/comment'
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { window.location.hash = "/login" }}
                >租赁记录</NavBar>
                {order.map(item => (
                    <div style={{ borderRadius: '20px', width: '100%', backgroundColor: 'white' }}>
                        {item.status ? (
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
                            <div onClick={()=>{this.comment()}}>
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
