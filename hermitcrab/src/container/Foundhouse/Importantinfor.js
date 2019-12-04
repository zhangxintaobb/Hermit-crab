import React, { Component } from 'react'
import './information.css'
import {Link} from 'react-router-dom';

export default class  extends Component {
    render() {
        return (
            <div>
                <div className="topExit animate-route">
                    <Link to='/study-room-infor'>
                        <button className="exit1">返回</button>
                    </Link>
                </div>
                <div className="txt02">
                    <p>自习室A类</p>
                    <p>占地面积：2㎡</p>
                    <p>价格：15元/天</p>
                    <p>具体地址：桥西区 中山东路166号如意商务大厦2003室</p>
                    <p>推荐方式：驾车7.7km 需要32分钟</p>
                </div>
                <div className="txt02">
                    <p>预约： 到店礼：倒计时小日历</p>
                    <p>￥19（门市价￥25）全天自习：博物馆，西王，勒泰店通用</p>
                    <p>￥9.9（门市价￥15）3小时自习：博物院，西王勒泰店通用</p>
                    <p>更多优惠尽在寄居蟹</p>
                    <p>......</p>
                </div>
            </div>
        )
    }
}
