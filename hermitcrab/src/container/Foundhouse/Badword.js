import React, { Component } from 'react'
import './information.css'
import {Link} from 'react-router-dom';

export default class Badword extends Component {
    render() {
        return (
            <div>
                <div className="topExit animate-route">
                    <Link to='/userword'>
                        <button className="exit1">返回</button>
                    </Link>
                </div>
                <div style={{
                    width:'20%',
                    marginLeft:'40%',
                    marginTop:'10px',
                    fontWeight:'bolder',
                }}><p>暂无差评!</p></div>
            </div>
        )
    }
}
