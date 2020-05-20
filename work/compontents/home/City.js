import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, TouchableOpacity, Image,DeviceEventEmitter } from 'react-native'
const cityArr = [
  { cityname: '成都', uri: require('../../assets/zxt/City/city6.jpg') },
  { cityname: '杭州', uri: require('../../assets/zxt/City/city7.jpg') },
  { cityname: '重庆', uri: require('../../assets/zxt/City/city8.jpg') },
  { cityname: '武汉', uri: require('../../assets/zxt/City/city9.jpg') },
  { cityname: '西安', uri: require('../../assets/zxt/City/city10.jpg') },
  { cityname: '苏州', uri: require('../../assets/zxt/City/city11.jpg') },
  { cityname: '天津', uri: require('../../assets/zxt/City/city12.jpg') },
  { cityname: '南京', uri: require('../../assets/zxt/City/city13.jpg') },
  { cityname: '长沙', uri: require('../../assets/zxt/City/city14.jpg') },
  { cityname: '郑州', uri: require('../../assets/zxt/City/city15.jpg') },
  { cityname: '东莞', uri: require('../../assets/zxt/City/city16.jpg') },
  { cityname: '青岛', uri: require('../../assets/zxt/City/city17.jpg') },
  { cityname: '沈阳', uri: require('../../assets/zxt/City/city18.jpg') },
  { cityname: '宁波', uri: require('../../assets/zxt/City/city19.jpg') },
  { cityname: '无锡', uri: require('../../assets/zxt/City/city20.jpg') },
  
]
export default class City extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.box}>
          {cityArr.map((data, i) => (
            <TouchableOpacity
              style={styles.block}
              onPress={() => {
                this.props.navigation.navigate('home');
                // 这里的param可以不写
                DeviceEventEmitter.emit("City",data.cityname);
              }}>
              <Image style={{ width: 50, height: 50, borderRadius: 35 }} source={data.uri} />
              <Text>{data.cityname}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  box: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  block: {
    width: '30%',
    height: 100,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
})