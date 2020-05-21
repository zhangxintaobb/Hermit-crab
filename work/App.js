/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, AsyncStorage
} from 'react-native';
import {
  Router,
  Scene,
  Tabs,
  Actions
} from 'react-native-router-flux';
import Home from './compontents/home';
import Message from './compontents/message/NHListAvatar';
import Person from './compontents/person';
import Find from './compontents/find';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import Lead from './compontents/begin/Lead';
import Login from './compontents/begin/Login';
import Register from './compontents/begin/Register'
import Office from './compontents/find/Office'
import StudyRoom from './compontents/find/StudyRoom'
import Comment from './compontents/find/Comment'
import Order from './compontents/find/Order'
import Information from './compontents/person/information';
import NmaeRevise from './compontents/person/information/NmaeRevise';
import EmailRevise from './compontents/person/information/EmailRevise';
import MyCollect from './compontents/person/Mycollect'
import AddressRevise from './compontents/person/information/AddressRevise';
import MyComment from './compontents/person/MyComment'
import PostComment from './compontents/find/PostComment';
import Card from './compontents/person/card'
import CustomerCenter from './compontents/person/informationl/CustomerCenter'
import MemberCenter from './compontents/person/informationl/MemberCenter'
import City from './compontents/home/City';
import Notify from './compontents/person/Notify';
import About from './compontents/person/About';
import Search from './compontents/home/Search';
console.disableYellowBox = true;//清除黄色警告
const App = () => {
  let [isLogin, setLogin] = useState(false);//设置登录状态
  let [isInstall, setInstall] = useState(true);//设置引导页状态
  SplashScreen.hide();
  let init = () => {  //初始化函数
    AsyncStorage.getItem('isInstall') //从本地获取isInstall
      .then(res => {
        console.log('isinstall', res) //打印本地获取的isInstall
        if (res) { //如果存在，设置isInstall的值为false；不出现引导页
          setInstall(false);
        }
      })
    AsyncStorage.getItem('user') //从本地获取用户信息
      .then(res => {
        let user = JSON.parse(res)
        console.log(user) //打印用户信息
        if (!user) {
          //如果没有用户信息
          //则软件暂无登录或已退出登录
          SplashScreen.hide();
        }
        if (user) {
          //如果本地存储用户信息
          //则登录状态为true，软件正在登陆中
          setLogin(true);
          console.log("已登陆")
          SplashScreen.hide();
        }
      })
  }
  //初始化函数调用
  useEffect(() => {
    init();
  }, [])
  let afterInstall = () => {
    console.log('after install')
    setInstall(false)
  }
  //如果非第一次使用app
  //则会出现引导页
  if (isInstall) {
    return <View style={{ flex: 1 }}>
      <Lead afterInstall={afterInstall} />
    </View>
  }

  return (
    <>
      <Router>
        <Scene key="root">
          <Tabs
            hideNavBar
            key="tabbar"
            showLabel={true}
            tabBarStyle={{ backgroundColor: "#ffffff" }}
            activeTintColor="#f23636"
          >
            <Scene
              hideNavBar
              key="home"
              component={Home}
              title="首页"
              icon={
                ({ focused }) => <Icon
                  size={30}
                  color={focused ? '#f23636' : '#949494'}
                  name="home"
                />
              }
            />
            <Scene
              hideNavBar
              key="find"
              component={Find}
              title="发现"
              icon={
                ({ focused }) => <Icon
                  size={30}
                  color={focused ? '#f23636' : '#949494'}
                  name="search1"
                />
              }
            />
            <Scene
              hideNavBar
              key="message"
              component={Message}
              title="消息"
              icon={
                ({ focused }) => <Icon
                  size={30}
                  color={focused ? '#f23636' : '#949494'}
                  name="mail"
                />
              }
            />
            <Scene
              hideNavBar
              key="person"
              component={Person}
              title="个人中心"
              icon={
                ({ focused }) => <Icon
                  size={30}
                  color={focused ? '#f23636' : '#949494'}
                  name="user"
                />
              }
            >
            </Scene>
          </Tabs>
          <Scene initial={!isLogin} hideNavBar key="login" component={Login} />
          <Scene
            key="register" hideNavBar component={Register} />
          <Scene
            key='office'
            title='办公室'
            component={Office}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene
            key='sr'
            title='自习室'
            component={StudyRoom}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene
            key='comment'
            component={Comment}
          />
          <Scene
            key='order'
            title='确认并支付'
            component={Order}
          />
          <Scene
            key='information'
            title='个人信息'
            component={Information}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
            renderLeftButton={<View></View>}
          />
          <Scene
            key='information_username'
            title='修改昵称'
            component={NmaeRevise}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene
            key='information_useraddress'
            title='修改地址'
            component={AddressRevise}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene
            key='information_useremail'
            title='修改邮箱'
            component={EmailRevise}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene
            key='mycollect'
            title='我的收藏'
            component={MyCollect}
          />
          <Scene
            key='mycomment'
            title='我的评价'
            component={MyComment}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene
            key='postcomment'
            title='提交评价'
            component={PostComment}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene
            key='menbercenter'
            title='会员中心'
            component={MemberCenter}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene
            key='customercenter'
            title='客服中心'
            component={CustomerCenter}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene 
          key='mycard'
          title='红包/卡券'
          component={Card}
          hideNavBar
          />
          <Scene
            key='city'
            title='热门城市'
            component={City}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene
            key='notify'
            title='通知'
            component={Notify}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene
            key='about'
            component={About}
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
          <Scene
            key='search'
            component={Search}
            hideNavBar
            titleStyle={{ flex: 1, textAlign: 'center' }}
            renderRightButton={<View></View>}
          />
        </Scene>
      </Router>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
