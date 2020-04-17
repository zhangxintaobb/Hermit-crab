import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Swiper from 'react-native-swiper';
import {
  Actions
} from 'react-native-router-flux';
export default class Lead extends Component {
  
  render() {
    return (
      <Swiper>
        <View style={styles.slide}>
          <Image 
          style={styles.img}
          source={require('../../assets/zxt/Swipe/a_01.png')} />
        </View>
        <View style={styles.slide}>
        <Image 
        style={styles.img}
        source={require('../../assets/zxt/Swipe/a_02.png')} />
        </View>
        <View style={styles.slide} >
        <Image 
        style={styles.img}
        source={require('../../assets/zxt/Swipe/a_03.png')} />
          <TouchableOpacity style={styles.start} onPress={Actions.login}>
            <Text style={{ color: '#fff' }}>开始体验</Text>
          </TouchableOpacity>
        </View>
      </Swiper>
    )
  }
}
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
  slide: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
  },
  start: {
    position: 'absolute',
    bottom: 150,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#99FFCC',
    borderRadius: 20,
  },
})
