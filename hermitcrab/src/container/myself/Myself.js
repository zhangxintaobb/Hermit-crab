import React, { Component } from 'react'
import { Flex, WhiteSpace, WingBlank,Button} from 'antd-mobile';
import { HashRouter as Router, Route, Link, Switch  } from 'react-router-dom'
import store from '../../store';
import {login} from '../../actions';



export default class Myself extends Component {
    
    //登录默认头像
    constructor(){
        super()
        this.state={
            img:'./zxt_image/1.JPG',
            data:store.getState().login,
        }
    }
    //退出登录
  warning = () => {
    window.location.href = "/"
  }
    render() {
        return (
            <Router>
            
                <div style={{
                    backgroundImage: 'url(zxt_image/2.jpg)', width: '100%', height: '100%', backgroundSize: 'cover',
                    filter: 'alpha(opacity=50)', MozOpacity: '0.5', opacity: '0.8'
                }}>
                    {/* 头部 */}
                    <div className="flex-container" style={{ paddingTop: '20%', marginBottom: '20%' }}>
                        <Flex>
                            <Flex.Item></Flex.Item>
                            {/* 头像 */}
                            <Flex.Item style={{ textAlign: 'right' }}>
                                <img src={this.state.img} style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '30px',
                                    margin: '0 auto'
                                }}></img>
                            </Flex.Item>
                            {/* 手机号码 */}
                            <Flex.Item><h4 style={{ display: 'inline-block' }}>{this.state.data.phonenumber}</h4></Flex.Item>
                            <Flex.Item></Flex.Item>
                        </Flex>
                    </div>
                    {/* 内容 */}
                    <WingBlank size='xl'>
                        <div className="flex-container">
                            {/* 个人信息 */}
                            <Flex style={{ borderTop: '2px solid #8a8a8a' }}>
                                <Flex.Item>
                                    <WhiteSpace size="sm" />
                                    <img src="zxt_image/个人信息.png"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            position: 'relative',
                                            top: '10px',
                                            marginRight: '5px'
                                        }} />
                                    <Link to="myself/person">
                                        <p style={{ color: 'white', display: 'inline-block' }}>个人信息</p>
                                    </Link>
                                    <WhiteSpace size="sm" />
                                    <br />
                                </Flex.Item>
                            </Flex>
                            {/* 我的收藏 */}
                            <Flex style={{ borderTop: '2px solid #8a8a8a' }}>
                                <Flex.Item>
                                    <WhiteSpace size="sm" />
                                    <img src="zxt_image/收藏.png"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            position: 'relative',
                                            top: '10px',
                                            marginRight: '5px'
                                        }} />
                                    <Link to='/myself/collection'>
                                        <p style={{ color: 'white', display: 'inline-block' }}>我的收藏</p>
                                    </Link>
                                    <WhiteSpace size="sm" />
                                    <br />
                                </Flex.Item>
                            </Flex>
                            {/* 我的评价 */}
                            <Flex style={{ borderTop: '2px solid #8a8a8a' }}>
                                <Flex.Item>
                                    <WhiteSpace size="sm" />
                                    <img src="zxt_image/记录.png"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            position: 'relative',
                                            top: '10px',
                                            marginRight: '5px'
                                        }} />
                                    <Link to='/myself/record'>
                                        <p style={{ color: 'white', display: 'inline-block' }}>我的评价</p>
                                    </Link>
                                    <WhiteSpace size="sm" />
                                    <br />
                                </Flex.Item>
                            </Flex>
                            {/* 租赁记录 */}
                            <Flex style={{ borderTop: '2px solid #8a8a8a' }}>
                                <Flex.Item>
                                    <WhiteSpace size="sm" />
                                    <img src="zxt_image/订单.png"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            position: 'relative',
                                            top: '10px',
                                            marginRight: '5px'
                                        }} />
                                    <Link to='/myself/order'>
                                        <p style={{ color: 'white', display: 'inline-block' }}>租赁记录</p>
                                    </Link>
                                    <WhiteSpace size="sm" />
                                    <br />
                                </Flex.Item>
                            </Flex>
                            {/* 我的消息 */}
                            <Flex style={{ borderTop: '2px solid #8a8a8a', 
                            borderBottom: '2px solid #8a8a8a' }}>
                                <Flex.Item>
                                    <WhiteSpace size="sm" />
                                    <img src="zxt_image/我的消息icon.png"
                                        style={{
                                            width: '30px',
                                            height: '30px',
                                            position: 'relative',
                                            top: '10px',
                                            marginRight: '5px'
                                        }} />
                                    <Link to='/myself/message'>
                                        <p style={{ color: 'white', display: 'inline-block' }}>我的消息</p>
                                    </Link>
                                    <WhiteSpace size="sm" />
                                    <br />
                                </Flex.Item>
                            </Flex>
                            {/* 退出登录按钮，点击后跳回主页面 */}
                            <Flex >
                                <Flex.Item>
                                    <Button type="warning" onClick={() => { this.warning() }}>退出登录</Button><WhiteSpace />
                                </Flex.Item>
                            </Flex>
                        </div>
                    </WingBlank>
                </div>
            </Router>
        )
    }
}