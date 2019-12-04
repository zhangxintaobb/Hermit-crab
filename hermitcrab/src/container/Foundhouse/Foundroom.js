import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom';
import information from './Information';
export default function Foundroom(){
    return(
        <div>
            <div className="zhaofangTop animate-route">
                <Link to='/login'><button onclick="foundhouse" className="zixishi02">自习室</button></Link>
                <button onclick="foundhouse" className="gongxiangbangong02">共享办公</button>
            </div>
            <div className="shaixuan animate-route">
                <button className="choose01">位置  ></button>
                <button className="choose01">形式  ></button>
                <button className="choose01">价格  ></button>
                <Link><button className="choose01">...  ></button></Link>
            </div>
            <div className="roomestyle">
                <div className="room01">
                    <div className="pic01">
                        <img src="q_images/office01.jpg" style={{
                            height:'120px',
                            width: '200px',
                        }}></img>
                    </div>
                    <div className="but01">
                        <button className="but001">办公室A</button>
                    </div>
                    <div className="txt03"><p>蜂巢办公室合租</p></div>
                </div>
                <div className="room01">
                    <div className="pic01">
                        <img src="q_images/office03.jpg" style={{
                            height:'120px',
                            width: '200px',
                        }}></img>
                    </div>
                    <div className="but01">
                        <button className="but001">办公室B</button>
                    </div>
                    <div className="txt03"><p>蜂巢办公室合租</p></div>
                </div>
                <div className="room01">
                    <div className="pic01">
                        <img src="q_images/office02.jpg" style={{
                            height:'120px',
                            width: '200px',
                        }}></img>
                    </div>
                    <div className="but01">
                        <button className="but001">办公室</button>
                    </div>
                    <div className="txt003"><p>包间</p></div>
                </div>
            </div>
        </div>
    )
}