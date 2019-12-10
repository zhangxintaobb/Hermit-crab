import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import {NavBar, Icon } from 'antd-mobile';
export default class Record extends Component {
    constructor(){
        super()
        this.state={
        // 设置页面id
          id:'record',
        // 设置返回时跳转的页面
          link:"4",
        // 设置是否返回跳转
          back:false
        }
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
                >我的评价</NavBar>
            </div>
        )
    }
}
