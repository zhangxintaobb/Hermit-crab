import React, { Component } from 'react'
import { NavBar, Icon, Flex, WhiteSpace, WingBlank } from 'antd-mobile';
import {Redirect} from "react-router-dom"
const collection = [{
    id:0,
    img: '/zxt_image/room1.jpg',
    name: '师大自习室',
    price: 100,
    address: '河北师范大学西门科技楼',
    type: '自习室'
}, {
    id:1,
    img: '/zxt_image/room2.jpg',
    name: '国大自习室',
    price: 200,
    address: '河北师范大学西门科技楼',
    type: '自习室'
}, {
    id:2,
    img: '/zxt_image/room3.jpg',
    name: '北大自习室',
    price: 300,
    address: '河北师范大学西门科技楼',
    type: '自习室'
}, {
    id:3,
    img: '/zxt_image/room4.jpg',
    name: '阿猫自习室',
    price: 400,
    address: '河北师范大学西门科技楼',
    type: '自习室'
}, {
    id:4,
    img: '/zxt_image/room5.jpg',
    name: '阿狗自习室',
    price: 500,
    address: '河北师范大学西门科技楼',
    type: '自习室'
},]
export default class extends Component {
    constructor() {
        super()
        this.state = {
            //收藏信息
            data:collection,
            //设置删除按钮状态，0未不显示，1为显示
            currentIndex: 0,
            //设置页面id
            id:'order',
            // 设置返回时跳转的页面
            link:"4",
            // 设置是否返回跳转
            back:false
        }
    }
    //跳转详情页
    infor = () => {
        window.location.hash = '/infor'
    }
    //点击头部右边...
    //设置删除是否出现
    showDiv = () => {
        //当是消失状态时，点击后显示
        if (this.state.currentIndex == 0) {
            this.setState({
                currentIndex: 1
            })
        }
        ////当是显示状态时，点击后消失
        else {
            this.setState({
                currentIndex: 0
            })
        }
    }
    //删除对应的收藏项
    delete = (item) => {
        console.log(item.item.id)
    }
    render() {
        //如果返回，跳转到个人信息页
        if(this.state.back){
            return (<Redirect to={{
              pathname:'/login',
              state:this.state
            }} />)
          }
        // console.log(this.state.data)
        //否则显示如下
        return (
            <div>
                {/* 头部 */}
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    //左边返回按钮
                    onLeftClick={() => {this.setState({
                        back:true
                    }) }}
                    //右边是否出现删除按钮
                    rightContent={[
                        <Icon type="ellipsis" onClick={() => this.showDiv()} />,
                    ]}
                    style={{borderBottom:'1px solid rgb(123, 137, 143)'}}
                >我的收藏</NavBar>
                <div className="flex-container">
                    {this.state.data.map((item) => (
                        <div key={item.id}>
                            <Flex>
                                {/* 删除小块 */}
                                <div ref="delete" onClick={() => { this.delete({item}) }}
                                    style={{
                                        width: '40px',
                                        height: '90px',
                                        backgroundColor: 'red',
                                        paddingTop:'17%',
                                        display: (1 === this.state.currentIndex) ? "block" : "none"
                                    }}
                                ><p style={{color:'white',fontWeight:'bold',textAlign:'center'}}>删除</p>
                                </div>
                                {/* 跳转详情页面 */}
                                <Flex.Item onClick={() => { this.infor() }}
                                style={{marginLeft:'0px'}}>
                                    <div
                                        style={{
                                            backgroundColor: 'white',
                                            lineHeight: '50px',
                                            color: '#888',
                                            fontSize: 18,
                                            borderBottom: '1px solid #F6F6F6',
                                        }}
                                    >
                                        <WingBlank>{item.name}</WingBlank>
                                    </div>
                                    <div style={{
                                        display: '-webkit-box',
                                        display: 'flex',
                                        padding: '15px',
                                        backgroundColor: 'white'
                                    }}>
                                        <img style={{width:'72px', height: '72px', marginRight: '15px' }} src={item.img} alt="" />
                                        <div style={{ lineHeight: 1 }}>
                                            <div style={{ marginBottom: '14px', fontWeight: 'bold' }}>{item.name}</div>
                                            <div style={{ marginBottom: '12px' }}>地址：{item.address}</div>
                                            <div><span style={{ fontSize: '20px', color: '#FF6E27' }}>¥{item.price}</span>&emsp; {item.type}</div>
                                        </div>
                                    </div>
                                </Flex.Item>
                            </Flex>
                            <WhiteSpace size="lg" />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
