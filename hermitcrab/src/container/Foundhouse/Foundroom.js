import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom';
import information from './Information';
export default function Foundroom(){
    return(
        <div>
            <div className="zhaofangTop animate-route">
                <Link to='/'><button onclick="foundhouse" className="zixishi02">自习室</button></Link>
                <button onclick="foundhouse" className="gongxiangbangong02">共享办公</button>
            </div>
            <div className="shaixuan animate-route">
                <Link to='/location'><button className="choose01">位置  ></button></Link>
                <Link to='/form'><button className="choose01">形式  ></button></Link>
                <Link to='/prise'><button className="choose01">价格  ></button></Link>
                <Link><button className="choose01">...  ></button></Link>
            </div>
            <div className="roomestyle">
                <div className="room01">
                    <div className="pic01">
                        <img src="q_images/office01.jpg" style={{
                            height:'60px',
                            width: '100px',
                        }}></img>
                    </div>
                    <div className="but01">
                        <button className="but001">办公室</button>
                    </div>
                    <div className="txt01"><p>蜂巢办公室合租</p></div>
                </div>
                <div className="room01">
                    <div className="pic01">
                        <img src="q_images/office02.jpg" style={{
                            height:'60px',
                            width: '100px',
                        }}></img>
                    </div>
                    <div className="but01">
                        <button className="but001">办公室</button>
                    </div>
                    <div className="txt01"><p>包间</p></div>
                </div>
            </div>
        </div>
    )
}