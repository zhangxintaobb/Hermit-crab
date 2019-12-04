import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom';
import information from './Information';
export default function Foundhouse(){
    return(
        <div>
            <div className="zhaofangTop animate-route">
                <button onclick="foundhouse" className="zixishi01">自习室</button>
                <Link to='/foundroom'><button onclick="foundhouse" className="gongxiangbangong01">共享办公</button></Link>
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
                        <img src="q_images/zixishi01.jpg" style={{
                            height:'60px',
                            width: '100px',
                        }}></img>
                    </div>
                    <div className="but01 animate-route">
                        <Link to='/study-room-infor' className='but001'>自习室</Link>
                    </div>
                    <div className="txt01"><p>自习室A类</p></div>
                </div>
                <div className="room01">
                    <div className="pic01">
                        <img src="q_images/zixishi02.jpg" style={{
                            height:'60px',
                            width: '100px',
                        }}></img>
                    </div>
                    <div className="but01">
                        <Link to='/study-room-infor' className='but001'>自习室</Link>
                    </div>
                    <div className="txt01"><p>自习室A类</p></div>
                </div>
                <div className="room01">
                    <div className="pic01">
                        <img src="q_images/zixishi01.jpg" style={{
                            height:'60px',
                            width: '100px',
                        }}></img>
                    </div>
                    <div className="but01">
                        <Link to='/study-room-infor' className='but001'>自习室</Link>
                    </div>
                    <div className="txt01"><p>自习室B类</p></div>
                </div>
                <div className="room01">
                    <div className="pic01">
                        <img src="q_images/zixishi02.jpg" style={{
                            height:'60px',
                            width: '100px',
                        }}></img>
                    </div>
                    <div className="but01">
                        <Link to='/study-room-infor' className='but001'>自习室</Link>
                    </div>
                    <div className="txt01"><p>自习室B类</p></div>
                </div>
            </div>
        </div>
    )
}
