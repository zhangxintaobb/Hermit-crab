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
                    <p>......</p>
                </div>
            </div>
        )
    }
}
