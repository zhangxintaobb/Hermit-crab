import React, { Component } from 'react'

export default function Foundhouse(){
    return(
        <div>
            <div className="zhaofangTop">
                <button onclick="foundhouse" className="zixishi01">自习室</button>
                <button onclick="foundhouse" className="gongxiangbangong01">共享办公</button>
            </div>
            <div className="shaixuan">
                <button className="choose01">位置  ></button>
                <button className="choose01">形式  ></button>
                <button className="choose01">价格  ></button>
                <button className="choose01">......  ></button>
            </div>
        </div>
    )
}
