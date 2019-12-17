import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './information.css'

export default class Information extends Component {

    render() {
        return (
            <div>
                <div className="topExit animate-route">
                    <Link to='info_jump'>
                      <button className="exit1">退出</button>
                    </Link>
                </div>
                <div className="img01">
                    <img src="q_images/zixishi03.jpg" style={{
                        width: '100%',
                        height:'200px'
                    }}></img>
                </div>
                <Link to='/importantinfor'><div className="txt02">
                    <h3>-师大学生自习室-</h3>
                    <div className="score"><p>4.6分</p></div>
                    <p>位置：师大科技园区</p>
                    <p>占地面积：20㎡</p>
                    <p>类型：大厅</p>
                    <p>价格：20元/小时</p>
                    <p>房东id：01</p>
                </div></Link>
                <div className="middleinfor animate-route">
                    <Link to='/importantinfor'>
                        <button className="exit2">详细信息</button>
                    </Link>
                </div>
                <div className="userword01 animate-route">
                    <Link to='/userword'>
                        <h3>用户评价(27)</h3>
                        <p>BetterMe_8601:打分：五星。
                        交通非常便利，环境是一个屋子，不过真的好安静，密码锁特别静音，里面有好多标志都很可爱，听不见外面的噪音，总的来说非常不错。</p>
                        <p>......</p>
                    </Link>
                </div>
                <div className="talktouser">
                    <Link to=''>
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
