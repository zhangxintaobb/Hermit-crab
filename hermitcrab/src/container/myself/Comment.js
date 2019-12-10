import React, { Component } from 'react'
import { Flex, NavBar, Icon, List, TextareaItem, Grid, WingBlank, WhiteSpace } from 'antd-mobile';
import { Redirect } from "react-router-dom"
var order = [
    {
        id: 1,
        img: '/zxt_image/room2.jpg',
        name: '我想静静自习室（万象城店）',
        price: '200',
        status: true,
        num: 2
    },
    {
        id: 2,
        img: '/zxt_image/room1.jpg',
        name: '阿猫自习室',
        price: '1000',
        status: false,
        num: 1
    }
]

const data = [
    {
        id:0,
        status:false,
        icon: '/zxt_image/好评.png',
        text: "好评",
    },
    {
        id:1,
        status:false,
        icon: '/zxt_image/心情一般-圆.png',
        text: "一般",
    }, {
        id:2,
        status:false,
        icon: '/zxt_image/差评.png',
        text: "差评",
    }
];

export default class Comment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // 设置页面id
            id: 'comment',
            //
            name: order[this.props.location.search.charAt(1)].name,
        }
    }
    
    attitude = ()=>{

    }
    handleClick =()=>{
        window.location.hash = "/myself/order"
    }
    render() {
        return (
            <div className="flex-container">
                {/* 头部 */}
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {
                        window.location.hash = "/myself/order"
                    }}
                //  this.props.location.search.charAt(1)
                >{this.state.name}</NavBar>
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                <Flex>
                    {data.map(item=>(
                        <Flex.Item style={{textAlign:'center',background:'white',padding:'10px'}}
                         onClick={()=>{this.attitude()}}
                         ref={item.id} >
                        <img src={item.icon} />
                        <p>{item.text}</p>
                    </Flex.Item>
                    )
                    )}
                </Flex>
                </WingBlank>
                <WhiteSpace size="lg" />
                <TextareaItem
                    placeholder="设施如何，服务时候周到，环境怎么样？（请给出您宝贵的意见）"
                    ref="comment"
                    style={{ width: '100%', height: '300px' }}
                />
                <List>
                    <List.Item>
                        <div
                            style={{
                                width: '100%',
                                color: '#108ee9',
                                textAlign: 'center'
                            }}
                            onClick={this.handleClick}
                        >
                            点击提交
                  </div>
                    </List.Item>
                </List>
            </div>
        )
    }
}
