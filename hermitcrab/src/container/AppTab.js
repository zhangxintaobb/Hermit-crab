import React, { Component } from 'react'
import { TabBar } from 'antd-mobile';

export default class AppTab extends Component {

    constructor(props) {
        super(props);
        this.state = {
          selectedTab: 'blueTab',
        };
    }

    
    render() {
        return (
            <div style={{position: 'fixed', height: '100%', width: '100%', top: 0 }}>
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
                            background: 'url(dock_icons/2.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(dock_icons/2.svg) center center /  21px 21px no-repeat' }}
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
                        Home
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(dock_icons/1.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(dock_icons/1.svg) center center /  21px 21px no-repeat' }}
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
                        找房
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(dock_icons/3.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(dock_icons/3.svg) center center /  21px 21px no-repeat' }}
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
                        person
                    </TabBar.Item>
                </TabBar>
            </div>
        )
    }
}