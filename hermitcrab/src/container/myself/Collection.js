import React, { Component } from 'react'
import { NavBar, Icon, Flex, WhiteSpace, WingBlank } from 'antd-mobile';
const collection = [{
    img: '/zxt_image/1.JPG',
    name: '师大自习室',
    price: 100,
    address: '河北师范大学西门科技楼',
    type: '自习室'
}, {
    img: '/zxt_image/1.JPG',
    name: '师大自习室',
    price: 200,
    address: '河北师范大学西门科技楼',
    type: '自习室'
}, {
    img: '/zxt_image/1.JPG',
    name: '师大自习室',
    price: 300,
    address: '河北师范大学西门科技楼',
    type: '自习室'
}, {
    img: '/zxt_image/1.JPG',
    name: '师大自习室',
    price: 400,
    address: '河北师范大学西门科技楼',
    type: '自习室'
}, {
    img: '/zxt_image/1.JPG',
    name: '师大自习室',
    price: 500,
    address: '河北师范大学西门科技楼',
    type: '自习室'
},]
export default class extends Component {
    constructor() {
        super()
        this.state = {
            currentIndex: 0,
        }
    }
    infor = () => {
        window.location.hash = '/infor'
    }
    showDiv = () => {
        if (this.state.currentIndex == 0) {
            this.setState({
                currentIndex: 1
            })
        }
        else {
            this.setState({
                currentIndex: 0
            })
        }
    }
    delete = () => {
        console.log("123")
    }

    render() {
        return (
            <div>
                {/* 头部 */}
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { window.location.hash = "/login" }}
                    rightContent={[
                        <Icon type="ellipsis" onClick={() => this.showDiv()} />,
                    ]}
                    style={{borderBottom:'1px solid rgb(123, 137, 143)'}}
                >我的收藏</NavBar>
                <div className="flex-container">
                    {collection.map((item) => (
                        <div>
                            <Flex>
                                {/* 删除小块 */}
                                <div ref="delete" onClick={() => { this.delete() }}
                                    style={{
                                        width: '40px',
                                        height: '150px',
                                        backgroundColor: 'red',
                                        paddingTop:'17%',
                                        display: (1 === this.state.currentIndex) ? "block" : "none"
                                    }}
                                ><p style={{color:'white',fontWeight:'bold',textAlign:'center'}}>删除</p>
                                </div>
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
                                        <img style={{ height: '72px', marginRight: '15px' }} src={item.img} alt="" />
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
