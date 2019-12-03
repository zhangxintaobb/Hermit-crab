import React, { Component } from 'react'
import './information.css'
import {Link} from 'react-router-dom';

export default class Userword extends Component {
    render() {
        return (
            <div>
                <div className="topExit animate-route">
                    <Link to='/study-room-infor'>
                        <button className="exit1">返回</button>
                    </Link>
                </div>
                <div className="goodorbad">
                    <div className="good animate-route">
                        <Link to='/userword'><button className="goodword">好评</button></Link>
                    </div>
                    <div className="bad animate-route">
                        <Link to='/badword'><button className="badword">差评</button></Link>
                    </div>
                </div>
                <div className="words">
                    <div className="word001">
                        <p>用户12138：环境舒适，学习氛围良好，好评！下次还会租的。:)</p>
                    </div>
                    <div className="word001">
                        <p>用户12138：环境舒适，学习氛围良好，好评！下次还会租的。:)</p>
                    </div>
                    <div className="word001">
                        <p>用户12138：环境舒适，学习氛围良好，好评！下次还会租的。:)</p>
                    </div>
                    <div className="word001">
                        <p>用户12138：环境舒适，学习氛围良好，好评！下次还会租的。:)</p>
                    </div>
                    <div className="word001">
                        <p>用户12138：环境舒适，学习氛围良好，好评！下次还会租的。:)</p>
                    </div>
                    <div className="word001">
                        <p>用户12138：环境舒适，学习氛围良好，好评！下次还会租的。:)</p>
                    </div>
                    <div className="word001">
                        <p>用户12138：环境舒适，学习氛围良好，好评！下次还会租的。:)</p>
                    </div>
                    <div className="word001">
                        <p>用户12138：环境舒适，学习氛围良好，好评！下次还会租的。:)</p>
                    </div>
                </div>
            </div>
        )
    }
}
