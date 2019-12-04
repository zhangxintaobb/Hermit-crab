import React, { Component } from 'react';
import './index.css'
import {useEffect,useState} from 'react'
import {HashRouter as Router,Route,Link} from 'react-router-dom'
import Myself from '../myself/Myself';
export default function Login(props){
    const [user,setUser]=useState("")
    const [pwd,setPwd]=useState("")
    // useEffect((e) => {
         function log(e){
             window.location.hash="/login"
        }
    // }, [])
  
        return(
            <div className="Logincolor">
                <div className="Top"><p>登录</p></div>
                <div className="second">
                    <button  className="button01">取消</button>
                </div>
                <div className="img1">
                    <img className="img11" src="" alt="头像" title="头像" />
                </div>
                <div className="crab"><p>寄居蟹</p></div>
                <div className="login1">
                    <div className="login11">
                        <input style={{marginLeft:'10%'}} type="number" name="username" placeholder="+86 |请输入手机号" required/>
                    </div>
                    <div className="login12">
                        <input style={{marginLeft:'10%'}} type="pwd" name="pwd" placeholder="请输入密码" />
                    </div>
                    <div className="button1">
                        <button onClick={(e)=>{log(e)}} className="button11">登录</button>
                    </div>
                </div>
                <div className="click1">
                    <div class="button2">
                        <button  className="button21">忘记密码？</button>
                    </div>
                    <div class="button3">
                        <button  className="button31">立即注册</button>
                    </div>
                </div>
            </div>
        )
        
}