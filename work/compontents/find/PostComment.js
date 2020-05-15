import React, { Component } from 'react'
import { Text, View, AsyncStorage, StyleSheet, TextInput, TouchableOpacity,Dimensions } from 'react-native'
import StarRating from 'react-native-star-rating';
export default class PostComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: 30,
            inputValue: '',
            starCount: 0
        }
    }
    //动态计算TextInput高度来解决TextInput文字始终垂直居中的问题
    cauculateHeight(e){
        if (e.nativeEvent.contentSize.height > 30) {
            height = e.nativeEvent.contentSize.height;
          } else {
            height = this.state.height;
          }
          this.setState({
            height: height
          })
    }
    changeText(text){
        this.setState({
            inputValue: text
        })
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    
    render() {
        return (
            <View style={styles.box}>
                <View style={styles.stars}>
                    <Text style={styles.font}>可以拖动星星评分哦</Text>
                    <StarRating
                        fullStarColor='yellow'
                        disabled={false}
                        maxStars={5}
                        rating={this.state.starCount}
                        selectedStar={(rating) => this.onStarRatingPress(rating)}
                    />
                </View>
                <View style = {styles.textInputOuter} >
                <TouchableOpacity activeOpacity = {1} style = {styles.textInputInner} onPress = {() => this.TextInput.focus()} >
                    <TextInput
                        placeholder = {'请输入文本内容'}
                        placeholderTextColor = {'#666666'}
                        underlineColorAndroid = {'transparent'}
                        multiline
                        numberOfLines = {5}
                        value = {this.state.inputValue}
                        ref = {textInput => this.TextInput = textInput}
                        onContentSizeChange = {e => this.cauculateHeight(e)}
                        onChangeText = {text => this.changeText(text)}
                        style = {[styles.textInput, {height: this.state.height}]}
                    />
                </TouchableOpacity>
            </View>
                <TouchableOpacity style={styles.submit}>
                    <Text>发布</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    box: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        height: '100%'

    },
    font: {
        color: "#ccc",
        marginBottom: 10
    },
    stars: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '15%',
        borderBottomColor: '#eeeeee',
        borderBottomWidth: 2
    },
    textInputOuter: {
        marginTop:20,
        height: '50%' ,
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingBottom: 0
    },
    textInputInner: {
        height: '100%',
        width: Dimensions.get('window').width ,
         borderBottomWidth: 2,
         borderBottomColor: '#eeeeee'
    },
    textInput: {
        paddingVertical: 0,
        fontSize: 16,
        color: '#333333',
        maxHeight: 105
    },
    submit: {
        width: '70%',
        height: 50,
        backgroundColor: 'yellow',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    }
})

