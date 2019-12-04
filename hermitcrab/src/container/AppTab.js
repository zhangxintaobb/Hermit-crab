import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';
import Myself from './myself/Myself'
import Home from '../components/Home'
import Login from './Login/Login';
import Foundhouse from './Foundhouse/Foundhouse';
import {HashRouter as Router,Route,Switch} from 'react-router-dom'
import Person from './myself/Person'
import Collection from './myself/Collection';
import Order from './myself/Order';
export default class AppTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'blueTab',
        };
    }


    render() {
        console.log(window.location)
        return (
            <Router>
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
                        <Foundhouse />
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
                              <Route path='/login' component={Myself} />
                              <Route path='/myself/person' component={Person} />
                              <Route path='/myself/collection' component={Collection} />
                              <Route path='/myself/order' component={Order} />   
                    </TabBar.Item>
                </TabBar>
            </div>
            </Router>
        )
    }
}