/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet
} from 'react-native';
import {
  Router,
  Scene,
  Tabs,
  Actions
} from 'react-native-router-flux';
import Home from './compontents/home';
import Message from './compontents/message';
import Person from './compontents/person'
const App = () => {
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
            />
            <Scene
              hideNavBar
              key="message"
              component={Message}
              title="消息"
            />
            <Scene
              hideNavBar
              key="person"
              component={Person}
              title="个人中心"
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
