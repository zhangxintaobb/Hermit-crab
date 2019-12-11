import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom';

export default class Beforeloading extends Component {
    render() {
        return (
            <div>
                <div className="wordintop">
                    <p>我的订单</p>
                </div>
                <div className="img1"><img className="img11" src="q_images/logo001.jpg"></img></div>
                <div className="jumptxt"><p>登录后可查看订单</p></div>
                <div className="jump">
                    <Link to='/login'><button className="jumpbut">登录</button></Link>
                </div>
            </div>
        )
    }
}
