import React, { Component } from 'react';
import './login.css'
import store from '../../store';
import {login} from '../../actions';
import { useEffect, useState } from 'react'
import { HashRouter as Router, Route, Link,Redirect } from 'react-router-dom'
import axios from '../../model/axios'
export default function Login(props) {
    //接受数据库传来的数据
    const [dat, setDat] = useState([])
    //将登录信息传给个人页的数据
    const[data,setData]=useState({})
    const [user, setUser] = useState("88888888888")
    const [pwd, setPwd] = useState("888888")
    const [jump,setJump]=useState(false)
    function register(e) {
        window.location.hash = '/register'
    }
    function getnumber(e){
        setUser(e.target.value)
    }
    function getpwd(e){
        setPwd(e.target.value)
    }
    useEffect(() => {
        fetch(`http://127.0.0.1:8081/login`, {
            method: 'GET'
        }).then(res => res.json()).then(
            data => {
                setDat(data.data)
            }
        )
    }, [])
    function loginIt() {
        for (var i = 0; i < dat.length; i++) {
            if (user == dat[i].phonenumber && pwd == dat[i].password) {
                setData(dat[i])
                store.dispatch(login(dat[i]))
                setJump(true)
            }
            else{console.log("err")}//待修改
        }
    }
    if (jump) {
        return (<Redirect to={{
          pathname: '/login',
          state: data
        }} />)
      }
    return (
        <div className="Logincolor">
            <div className="Top"><p>登录</p></div>
            <div className="second">
                <button className="button01">取消</button>
            </div>
            <div className="img1">
                <img className="img11" src="q_images/logo001.jpg" alt="头像" title="头像" />
            </div>
            <div className="crab"><p>寄居蟹</p></div>
            <div className="login1">
                <div className="login11">
                    <input style={{ marginLeft: '10%' }}
                    onChange={(e)=>{getnumber(e)}}
                    type="number" name="username" placeholder="+86 |请输入手机号" required />
                </div>
                <div className="login12">
                    <input  
                    onChange={(e)=>{getpwd(e)}}
                    style={{ marginLeft: '10%' }} type="pwd" name="pwd" placeholder="请输入密码" />
                </div>
                <div className="button1">
                    <button onClick={loginIt} className="button11">登录</button>
                </div>
            </div>
            <div className="click1">
                <div class="button2">
                    <button className="button21">忘记密码？</button>
                </div>
                <div class="button3">
                    <button className="button31" onClick={(e) => { register() }}>立即注册</button>
                </div>
            </div>
        </div>
    )

}