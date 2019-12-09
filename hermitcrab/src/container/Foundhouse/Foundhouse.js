import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom';
import information from './Information';
export default function Foundhouse() {
    return (
        <div>
            <div className="zhaofangTop animate-route">
                <button onClick="foundhouse" className="zixishi01">自习室</button>
                <Link to='/login/foundroom'><button onClick="foundhouse" className="gongxiangbangong01">共享办公</button></Link>
            </div>
            <div className="shaixuan animate-route">
                <button className="choose01">位置  ></button>
                <button className="choose01">形式  ></button>
                <button className="choose01">价格  ></button>
                <button className="choose01">...  ></button>
            </div>
            <div className="roomestyle">
                <div className="room01">
                    <div className="pic01">
                        <img src="q_images/zixishi01.jpg" style={{
                            height: '120px',
                            width: '200px',
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
                            height: '120px',
                            width: '200px',
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
                            height: '120px',
                            width: '200px',
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
                            height: '120px',
                            width: '200px',
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
