/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,View
} from 'react-native';
import {
  Router,
  Scene,
  Tabs,
  Actions
} from 'react-native-router-flux';
import Home from './compontents/home';
import Message from './compontents/message';
import Person from './compontents/person';
import Find from './compontents/find';
import SplashScreen from 'react-native-splash-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import Lead from './compontents/begin/Lead';
import Login from './compontents/begin/Login';
import Register from './compontents/begin/Register'
console.disableYellowBox = true;//清除黄色警告
const App = () => {
  SplashScreen.hide();
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
        </Scene>
      </Router>
    </>
  );
};

const styles = StyleSheet.create({

});

export default App;
