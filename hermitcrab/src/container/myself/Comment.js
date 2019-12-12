import React, { Component } from 'react'
import { Flex, NavBar, Icon, List, TextareaItem, Grid, WingBlank, WhiteSpace } from 'antd-mobile';
import { Redirect } from "react-router-dom"
import axios from '../../model/axios'
import store from '../../store';
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
        icon: '/zxt_image/好评.png',
        icon1:'/zxt_image/好评1.png',
        text: "好评",
    },
    {
        id:1,
        icon: '/zxt_image/心情一般-圆.png',
        icon1: '/zxt_image/心情一般-圆1.png',
        text: "一般",
    }, {
        id:2,
        icon: '/zxt_image/差评.png',
        icon1: '/zxt_image/差评1.png',
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
            data:{},
            status:[1,0,0],
        }
    }
    componentDidMount(){
        axios({
            url: 'http://127.0.0.1:8081/studyroom',
            method: 'get',
            responsetype:'json',
            params: {
                srid:this.props.location.search.charAt(1)
            }
          })
          .then((response)=> {
            console.log(response)
            this.setState(() => ({
                data: response.data[0],
            }))
          })
          .catch(function (error) {
            console.log(error);
          })
    }

    attitude = (item)=>{
        console.log(item.item)
        const status=[0,0,0]
        status[item.item.id]=1
        console.log(status)
        this.setState({
            status:status
        })
    }
    handleClick =()=>{
        console.log(this.refs.comment.state.value)
        const content=this.refs.comment.state.value
        var status="";
        this.state.status[0]==1 ? status="满意":(this.state.status[1]==1 ? status="一般" : status="差评");
        console.log(status)
        //提交评价
        axios({
            url: 'http://127.0.0.1:8081/commit/put',
            method: 'get',
            responsetype: 'json',
            params: {
                content:content,
                status:status,
                userid:store.getState().login.userid,
                type:this.state.data.type,
                roomid:this.state.data.srid           
            }
        })
            .then((response) => {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
        console.log(this.refs.comment.state.value)
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
                >{this.state.data.srname}</NavBar>
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                <Flex>
                    {data.map((item,index)=>(
                        <Flex.Item style={{ textAlign:'center',background:'white',padding:'10px'}}
                         onClick={()=>{this.attitude({item})}}
                         ref={item.id}
                         key={item.id} >
                        <img src={item.icon1} style={{
                            margin:"0 auto",
                            display: (1 === this.state.status[index]) ? "block" : "none"}} />
                        <img src={item.icon} style={{
                            margin:"0 auto",
                            display: (0 === this.state.status[index]) ? "block" : "none"}} />
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
