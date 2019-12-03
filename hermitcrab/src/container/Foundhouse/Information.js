import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './information.css'

export default class Information extends Component {

    render() {
        return (
            <div>
                <div className="topExit animate-route">
                    <Link to='/'>
                      <button className="exit1">退出</button>
                    </Link>
                </div>
                <div className="img01">
                    <img src="q_images/zixishi01.jpg" style={{
                        width: '100%',
                        height:'200px',
                    }}></img>
                </div>
                <div className="txt02">
                    <p>自习室A类</p>
                    <p>占地面积：2㎡</p>
                    <p>价格：15元/天</p>
                    <p>......</p>
                </div>
                <div className="userword01 animate-route">
                    <Link to='/userword'>
                        <p>用户评论(99+)</p>
                        <p>用户12138：环境舒适，学习氛围良好，好评！下次还会租的。:)</p>
                        <p>......</p>
                    </Link>
                </div>
                <div className="middleinfor animate-route">
                    <Link to='/importantinfor'>
                        <button className="exit2">详细信息</button>
                    </Link>
                </div>
                <div className="talktouser">
                    <Link to='/talk'>
                        <button className="exit3">联系店主</button>
                    </Link>
                </div>
                <div className="likebest">
                    <Link to='/add_collection'>
                        <button className="exit4">收藏</button>
                    </Link>
                </div>
            </div>
        )
    }
}
