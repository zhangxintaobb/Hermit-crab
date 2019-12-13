import React, { Component } from 'react'
import { Redirect } from "react-router-dom"
import { Button, NavBar, Icon, Flex, WhiteSpace, WingBlank, List } from 'antd-mobile';
import axios from '../../model/axios'
import store from '../../store';
export default class Record extends Component {
  constructor() {
    super()
    this.state = {
      // 设置页面id
      id: 'record',
      // 设置返回时跳转的页面
      link: "4",
      // 设置是否返回跳转
      back: false,
      data: [],
      room:[],
      img:[]
    }
  }
  componentDidMount() {
    axios({
      url: 'http://127.0.0.1:8081/record',
      method: 'get',
      responsetype: 'json',
      params: {
        userid: store.getState().login.userid,
      }
    })
      .then((response) => {
        console.log(response)
        this.setState(() => ({
          data: response.data
        }))
        let room="(";
        for(var i=0;i<response.data.length;i++){
          room=room+response.data[i].roomid.toString()+","
          
        }
        room=room.substring(0,room.length-1)+")"
        console.log(room)
        axios({
          url: 'http://127.0.0.1:8081/record/room',
          method: 'get',
          responsetype: 'json',
          params: {
            room:room
          }
        })
          .then((response) => {
            var room1=[]
            var img1=[]
            for(var i=0;i<response.data.length;i++){
              room1.push(response.data[i].srname);
              img1.push(response.data[i].img)
            }
            console.log(room1)
            this.setState(() => ({
              room: room1,
              img:img1
            }))
          })
          .catch(function (error) {
            console.log(error);
          })
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  render() {
    console.log(this.state.room[0])
    console.log(this.state.data)
    var dataroom=[];
    for(var i=0;i<this.state.data.length;i++){
      dataroom[i]={
        commit_content:this.state.data[i].commit_content,
        commit_status:this.state.data[i].commit_status,
        createtime:this.state.data[i].createtime,
        room:this.state.room[i],
        img:this.state.img[i]
      }
    }
    console.log(dataroom)
    //如果back为真，跳回个人信息页面
    if (this.state.back) {
      return (<Redirect to={{
        pathname: '/login',
        state: this.state
      }} />)
    }
    //如果back为否，显示以下内容
    return (
      <div>
        {/* 头部 */}
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          // 如果点击返回，回调函数，back为真
          onLeftClick={() => {
            this.setState({
              back: true
            })
          }}
        >我的评价</NavBar>
        {dataroom.map((item) => (
          
          <div >
            
            <div>
              <List style={{ margin: '5px 0', backgroundColor: 'white' }}>
                <List.Item>
                  <img style={{
                    width: '54px',
                    height: '54px',
                    marginRight: '15px',
                    borderRadius: '5px',
                    float: 'left'
                  }} src={item.img} alt="" />
                  <List.Item.Brief style={{ display: 'inline-block', float: 'left' }}>
                      <h6>名称：{item.room}</h6>
                    <List.Item.Brief style={{ display: 'inline-block' }}>
                <h6>评分:{item.commit_status}</h6>
                    </List.Item.Brief>
                  </List.Item.Brief>
                </List.Item>
                <List.Item>
                  <h6>评价:{item.commit_content}</h6>
                </List.Item>
              </List>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
