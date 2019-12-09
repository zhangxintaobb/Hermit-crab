import React, { Component,Space } from 'react'
import { TabBar } from 'antd-mobile';
import Myself from './myself/Myself'
import Home from '../components/Home'
import Login from './Login/Login';
import Foundhouse from './Foundhouse/Foundhouse';
// import Information from './Foundhouse/Information';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'

import Phone_Register from './registration/js/Phone_Register';
import Foundroom from './Foundhouse/Foundroom'
export default class AppTab extends Component {

    constructor(props,context) {
        super(props,context);
        this.state = {
            //初始默认第一个下标页
            selectedTab: 'blueTab',
        };
    }
    componentDidMount(){
        //查看是否是由其他页面跳转而来
        const jump=this.props.location.state;
        console.log(jump)
        //如果不是，返回的是第一个下标页
        if(jump==undefined){
        }
        //或者，查看jump携带的link值
        else {
            //link值为1时，跳转到默认下标页
            if(jump.link=='1'){
                this.setState({
                    selectedTab:'buleTab',
                })}
            //link值为2时，跳转到下标为2的页面
            else if(jump.link=='2'){
                this.setState({
                    selectedTab:'redTab',
                })}
            //link值为3时，跳转到下标为3的页面
            else if(jump.link=='3'){
                this.setState({
                    selectedTab:'greenTab',
            })}
            //link值为4时，跳转到下标为4的页面
            else if(jump.link=='4'){
            this.setState({
                selectedTab:'yellowTab',
            })}
        }
    }

    render() {
        return (
            <Router  >
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#3fcccb"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(dock_icons/2.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(dock_icons/2.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'blueTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'blueTab',
                            });
                        }}
                        data-seed="logId"
                    >
                        <Home />

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(dock_icons/1.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(dock_icons/1.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="找房"
                        key="Koubei"
                        selected={this.state.selectedTab === 'redTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'redTab',
                            });
                        }}
                        data-seed="logId1"
                    >
                        
                        <Route exact path="/login/" component={Foundhouse} />
                        <Route path='/login/foundroom' component={Foundroom} />
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(dock_icons/3.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(dock_icons/3.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="消息"
                        key="Friend"
                        // dot
                        selected={this.state.selectedTab === 'greenTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'greenTab',
                            });
                        }}
                    >
                        消息
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'dock_icons/4.svg' }}
                        selectedIcon={{ uri: 'dock_icons/4.svg' }}
                        title="我的"
                        key="my"
                        selected={this.state.selectedTab === 'yellowTab'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'yellowTab',
                            });
                        }}
                    >
                
                              <Route exact path='/' component={Login} />
                              <Route path='/login' component={Myself}/>
                              <Route path='/register' component={Phone_Register} />

                    </TabBar.Item>
                </TabBar>
            </div>
            </Router>
        )
    }
}