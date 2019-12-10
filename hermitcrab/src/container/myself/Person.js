import React, { Component } from 'react'
import { Flex, Button, Picker, WhiteSpace, WingBlank, NavBar, Icon, ImagePicker, SegmentedControl, List, InputItem } from 'antd-mobile';
import arrayTreeFilter from 'array-tree-filter';
import { district, provinceLite } from 'antd-mobile-demo-data';
import { Redirect } from "react-router-dom"
import axios from '../../model/axios'
import store from '../../store';
import {login} from '../../actions';
// 个人信息接口
const person =
{
  uername: '张鑫涛',
  phoneNumber: '18078896320',
  headPic: '/zxt_image/1.JPG',
  sex: "男",
  email: '1308745987@qq.com',
};
// 修改头像
const data = [{
  url: person.headPic,
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
      user:store.getState().login,
      // 设置页面id
      id: 'person',
      //图片地址
      files: data,
      //性别
      sValue: [person.sex],
      //用户名称
      username: person.uername,
      //用户手机号
      phoneNumber: person.phoneNumber,
      //用户邮箱
      email: person.email,
      //提交按钮
      redirect: false,
      // 设置返回时跳转的页面
      link: "4",
      // 设置是否返回跳转
      back: false
    }
  }
  // 数据请求
  getData(){ //请求数据函数
    fetch(`http://127.0.0.1:8081/myself/person`,{
    method: 'GET'
    }).then(res => res.json()).then(
    data => {
      console.log(data)
      this.setState({
        sValue: [data.sex],
        username: data.username,
        email: data.email,
        phoneNumber: data.phoneNumber

      })
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
    this.setState({
      username: this.refs.user.state.value,
      phoneNumber: this.refs.phoneNumber.state.value,
      email: this.refs.email.state.value,
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
  componentWillMount(){
    this.getData();
    console.log(this.props)
  }
  render() {
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
                    placeholder={this.state.username}
                    ref="user"
                    style={{ textAlign: "right" }}
                  >名称</InputItem>
                  {/* 手机号码修改 */}
                  <InputItem
                    clear
                    placeholder={this.state.phoneNumber}
                    ref="phoneNumber"
                    style={{ textAlign: "right" }}
                  >手机号码</InputItem>
                  {/* 邮箱修改 */}
                  <InputItem
                    clear
                    placeholder={this.state.email}
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
