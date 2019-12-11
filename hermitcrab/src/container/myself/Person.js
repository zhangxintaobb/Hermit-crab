import React, { Component } from 'react'
import { Flex, Button, Picker, WhiteSpace, WingBlank, NavBar, Icon, ImagePicker, SegmentedControl, List, InputItem } from 'antd-mobile';
import arrayTreeFilter from 'array-tree-filter';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { Redirect } from "react-router-dom"
import axios from '../../model/axios'
import store from '../../store';
// 修改头像
const data = [{
  url: "/zxt_image/1.JPG",
}];
//性别选择
const CustomChildren = props => (
  <div
    onClick={props.onClick}
    style={{ backgroundColor: '#fff' }}
  >
    <div className="test" style={{ display: 'flex', height: '45px', lineHeight: '45px' }}>
      <div style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{props.children}</div>
      <div style={{ textAlign: 'right', color: '#888', marginRight: 15 }}>{props.extra}</div>
    </div>
  </div>
);
// 默认两种性别
const sex = [
  [
    {
      label: '男',
      value: '男',
    },
    {
      label: '女',
      value: '女',
    },
  ],
];

export default class Person extends Component {
  constructor() {
    super()
    this.state = {
      user:{},
      // 设置页面id
      id: 'person',
      //图片地址
      files: data,
      //性别
      sValue: [],
      //提交按钮
      redirect: false,
      // 设置返回时跳转的页面
      link: "4",
      // 设置是否返回跳转
      back: false
    }
  }
  componentDidMount(){
    fetch(`http://127.0.0.1:8081/login`, {
            method: 'GET'
        }).then(res => res.json()).then(
            data => {
                console.log(data.data)
                for(var i=0;i<data.data.length;i++){
                if(store.getState().login.userid==data.data[i].userid){
                    this.setState({
                        user:data.data[i],
                        sValue:[data.data[i].sex]
                    })
                }
            }
            }
        )
  }
  //头像修改
  onChange = (files) => {
    this.setState({
      files,
    });
  }
  //设置头像数量
  onSegChange = (e) => {
    const index = e.nativeEvent.selectedSegmentIndex;
    this.setState({
      multiple: index === 1,
    });
  }
  //点击提交
  //将修改后的信息传给state
  handleClick = () => {
  
axios({
  url: 'http://127.0.0.1:8081/myself/person',
  method: 'post',
  responsetype:'json',
  params: {
        username: this.refs.user.state.value || this.state.user.username,
      email: this.refs.email.state.value || this.state.user.email,
      sex:this.state.sValue[0] || this.state.user.sex,
      password:this.refs.password.state.value || this.state.user.password,
      userid:this.state.user.userid
  }
})
.then(function (response) {
  console.log(response);
})
.catch(function (error) {
  console.log(error);
})
    this.setState({
      redirect: true
    })
    
  }

  // 性别选择
  getSel() {
    const value = this.state.pickerValue;
    if (!value) {
      return '';
    }
    const treeChildren = arrayTreeFilter(district, (c, level) => c.value === value[level]);
    return treeChildren.map(v => v.label).join(',');
  }
  render() {
    console.log(this.state.user)
    const { files } = this.state;
    //如果提交，跳转页面到个人信息页
    if (this.state.redirect) {
      return (<Redirect to={{
        pathname: '/login',
        state: this.state
      }} />)
    }
    //如果返回，跳转到个人信息页
    if (this.state.back) {
      return (<Redirect to={{
        pathname: '/login',
        state: this.state
      }} />)
    }
    // const { getFieldProps } = this.props.form;
    return (
      <div className="flex-container">
        {/* 头部 */}
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          //点击返回，跳回个人信息页面
          onLeftClick={() => {
            this.setState({
              back: true
            })
          }}
          style={{ borderBottom: '1px solid rgb(136, 136, 136)' }}
        >个人信息</NavBar>
        {/* 修改头像 */}
        <Flex>
          <Flex.Item>
            <div style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
              <WhiteSpace size="sm" />
              <WingBlank size="md">
                <p style={{ display: "inline-block", lineHeight: '3.5', fontWeight: 'bold' }}>修改头像</p>
              </WingBlank>
              <ImagePicker
                files={files}
                onChange={this.onChange}
                onImageClick={(index, fs) => console.log(index, fs)}
                selectable={files.length < 1}
                multiple={this.state.multiple}
              />
              <WhiteSpace size="sm" />
            </div>
          </Flex.Item>
        </Flex>
        {/* 其他个人信息 */}
        <Flex>
          <Flex.Item>
            <div style={{
              width: '100%',
              height: '100%',
              backgroundColor: 'white',
            }}>
              <List>
                <List.Item>
                  {/* 名称修改 */}
                  <InputItem
                    clear
                    placeholder={this.state.user.username}
                    ref="user"
                    style={{ textAlign: "right" }}
                  >名称</InputItem>
                  {/* 密码修改 */}
                  <InputItem
                    clear
                    placeholder={this.state.user.password}
                    ref="password"
                    style={{ textAlign: "right" }}
                  >用户密码</InputItem>
                  {/* 邮箱修改 */}
                  <InputItem
                    clear
                    placeholder={this.state.user.email}
                    ref="email"
                    style={{ textAlign: "right" }}
                  >电子邮箱</InputItem>
                  {/* 性别修改 */}
                  <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'white',
                    borderBottom: '1px solid #7B898F'
                  }}>
                    <List style={{ backgroundColor: 'white' }} className="picker-list">
                      <Picker
                        data={sex}
                        title="选择性别"
                        cascade={false}
                        extra="请选择(可选)"
                        value={this.state.sValue}
                        onChange={v => this.setState({ sValue: v })}
                        onOk={v => this.setState({ sValue: v })}
                      >
                        <List.Item arrow="horizontal">性别</List.Item>
                      </Picker>
                    </List>
                  </div>
                </List.Item>
              </List>
            </div>
          </Flex.Item>
        </Flex>
        <br />
        <Flex>
          <Flex.Item>
            <List>
              <List.Item>
                <div
                  style={{
                    width: '100%',
                    color: '#108ee9',
                    textAlign: 'center'
                  }}
                  onClick={this.handleClick}
                >
                  点击提交
                  </div>
              </List.Item>
            </List>
          </Flex.Item>
        </Flex>
      </div>

    )
  }
}
