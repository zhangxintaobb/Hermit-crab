import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'
const { width, height } = Dimensions.get('window');
export default class OrderInfo extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.listitem1}>
                <Image
                    source={{ uri: this.props.img }}
                    style={styles.pic}
                />
                <View style={{ width: width * 0.3, }}>
                </View>
                <View style={{ marginLeft: 10 }}>

                    <Text>/天</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    listitem1: {
        display: 'flex',
        height: height * 1 / 6,
        width: width * 0.9,
        margin: 0,
        marginTop: 10,
        marginLeft: width * 0.05,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row'
    },
    listitem: {
        display: 'flex',
        height: height * 1 / 6,
        width: width * 0.9,
        margin: 0,
        marginTop: 10,
        // marginLeft:width*0.05,
        backgroundColor: '#fff',
        borderRadius: 20,
        flexDirection: 'row'
    },
    pic: {
        width: width * 0.4,
        height: '100%',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        marginRight: 10
    },
    title: {
        height: '25%',
        fontSize: 14,
        marginTop: 5,
    },
    price: {
        fontSize: 14,
        marginTop: 5,
        fontWeight: 'bold'
    }
})