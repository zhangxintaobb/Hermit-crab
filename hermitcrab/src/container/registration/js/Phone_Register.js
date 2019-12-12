import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import '../css/phone_reg.css';
var code;

export default class Phone_Register extends Component {
    constructor() {
        super();
        this.state = {
            eyes: 0
        }
    }
    componentDidMount() {
        this.createCode();
    }
    checkEye = () => {
        if (this.state.eyes % 2 === 0) {
            document.getElementsByClassName('phone_reg_eyec')[0].className = 'phone_reg_eyes';
            document.getElementsByClassName('phone_reg_eyes')[0].className = 'phone_reg_none';
            document.getElementsByClassName('phone_reg_psw')[0].type = 'text';
            this.setState({
                eyes: this.state.eyes + 1
            });
        } else {
            document.getElementsByClassName('phone_reg_eyes')[0].className = 'phone_reg_eyec';
            document.getElementsByClassName('phone_reg_none')[0].className = 'phone_reg_eyes';
            document.getElementsByClassName('phone_reg_psw')[0].type = 'password';
            this.setState({
                eyes: this.state.eyes + 1
            });
        }
    }
    createCode = () => {
        code = "";
        var codeLength = 4;
        var checkCode = document.getElementById("code");
        var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (var i = 0; i < codeLength; i++) {
            var index = Math.floor(Math.random() * 36);
            code += random[index];
        }
        checkCode.value = code;
    }
    valiDate = () => {
        var inputCode = document.getElementById("input").value.toUpperCase();
        var pwd = document.getElementById("pwd").value;
        if (inputCode.length <= 0) {
            alert("验证码不能为空");
        } else if (inputCode !== code) {
            alert("验证码输入错误，请重新输入");
            this.createCode();
            document.getElementById("input").value = '';
        } else {
            alert("注册成功");
            document.getElementById("input").value = '';
            this.createCode();
        }
    }
    render() {
        return (
            <div>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => { window.location.hash = "/" }}
                    style={{ borderBottom: '1px solid rgb(136, 136, 136)' }}
                >个人信息
                </NavBar>
                <div>
                    <form action="http://zy.eatclub.wang:3000/adduser" method="POST">
                        <div style={{ fontSize: '18px', marginLeft: '30px', marginTop: '30px' }}>
                            <span style={{ display: 'block', float: 'left', marginTop: '5px' }}>用户名</span>
                            <input id="username" name="username" placeholder={"请输入用户名"} style={{ marginLeft: '80px', width: '200px', height: '30px', borderRadius: '5px', fontSize: '14px' }} />
                        </div>
                        <div style={{ fontSize: '18px', marginLeft: '30px', marginTop: '30px' }}>
                            <span style={{ display: 'block', float: 'left', marginTop: '5px' }}>性别</span>
                            <input name="sex" type="text" list="listItem" placeholder="请选择性别" style={{ marginLeft: '80px', width: '200px', height: '30px', borderRadius: '5px', fontSize: '14px' }} />
                            <datalist id="listItem">
                                <option>男</option>
                                <option>女</option>
                            </datalist>
                        </div>
                        <div style={{ fontSize: '18px', marginLeft: '30px', marginTop: '30px' }}>
                            <span style={{ display: 'block', float: 'left', marginTop: '5px' }}>+86</span>
                            <input type="number" name="phone" placeholder={"请输入手机号"} style={{ marginLeft: '80px', width: '200px', height: '30px', borderRadius: '5px', fontSize: '14px' }} />
                        </div>
                        <div style={{ fontSize: '18px', marginLeft: '30px', marginTop: '30px' }}>
                            <button style={{ marginRight: '10px', display: 'block', float: 'left', fontSize: '12px', height: '25px', width: '70px', borderRadius: '5px', backgroundColor: 'green', color: 'white' }} onClick={() => alert("验证码已发送，请注意查收")}>发送验证码</button>
                            <input placeholder="请输入验证码" style={{ marginLeft: '3px', width: '100px', height: '30px', borderRadius: '5px', fontSize: '14px' }} />
                        </div>
                        <div style={{ fontSize: '18px', marginLeft: '30px', marginTop: '30px' }}>
                            <span style={{ display: 'block', float: 'left', marginTop: '5px' }}>密码</span>
                            <input id="pwd" type="password" name="pwd" placeholder={"请输入密码"} style={{ display: 'block', float: 'left', marginLeft: '46px', width: '200px', height: '30px', borderRadius: '5px', fontSize: '14px' }} />
                            <div className="phone_reg_eye">
                                <img src="/g_images/view_off.png" className="phone_reg_eyes" onClick={this.checkEye} />
                                <img src="/g_images/view.png" className="phone_reg_eyec" onClick={this.checkEye} />
                            </div>
                        </div>
                        <div style={{ fontSize: '18px', marginLeft: '30px', marginTop: '30px' }}>
                            <span style={{ display: 'block', float: 'left', marginTop: '5px' }}>地址</span>
                            <input name="address" placeholder={"请输入地址"} style={{ marginLeft: '80px', width: '200px', height: '30px', borderRadius: '5px', fontSize: '14px' }} />
                        </div>
                        <div style={{ fontSize: '18px', marginLeft: '30px', marginTop: '30px' }}>
                            <span style={{ display: 'block', float: 'left', marginTop: '5px' }}>邮箱</span>
                            <input type="email" name="email" placeholder={"请输入邮箱"} style={{ marginLeft: '80px', width: '200px', height: '30px', borderRadius: '5px', fontSize: '14px' }} />
                        </div>
                        <div style={{ fontSize: '18px', marginLeft: '30px', marginTop: '30px' }}>
                            <span style={{ display: 'block', float: 'left', marginTop: '5px' }}>验证码</span>
                            <input type="text" id="input" placeholder={"请输入验证码"} style={{ display: 'block', float: 'left', marginLeft: '30px', width: '120px', height: '30px', borderRadius: '5px', fontSize: '14px' }} />
                            <input type="button" onClick={this.createCode} id="code" style={{ width: '70px', marginLeft: '10px' }} />
                        </div>
                        <button type="submit" className="phone_reg_zc" onClick={this.valiDate}>注册</button>
                    </form>
                    <hr />
                    <br />
                    <span style={{ fontSize: '14px', color: 'grey', marginLeft: '75px' }}>(您也可以通过以下方式来快捷注册)</span>
                    <div>
                        <img src="/g_images/QQ.png" className="else_reg_img" onClick={() => alert('该方式尚未开通')} />
                    </div>
                    <div>
                        <img src="/g_images/wechat.png" className="else_reg_img" onClick={() => alert('该方式尚未开通')} />
                    </div>
                    <div>
                        <img src="/g_images/weibo.png" className="else_reg_img" onClick={() => alert('该方式尚未开通')} />
                    </div>
                    <div>
                        <img src="/g_images/taobao.png" className="else_reg_img" onClick={() => alert('该方式尚未开通')} />
                    </div>
                </div>
            </div >
        )
    }
}
