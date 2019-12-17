import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
export default class Info_jump extends Component {
    constructor() {
        super()
        this.state = {
            link: "2",
            back: true
        }
    }
    render() {
         //如果返回，跳转到个人信息页
         if (this.state.back) {
            return (<Redirect to={{
                pathname: '/login',
                state: this.state
            }} />)
        }
        return (
            <div>
                
            </div>
        )
    }
}
