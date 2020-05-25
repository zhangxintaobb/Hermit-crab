import React, { Component } from 'react'
import { Text, View, AsyncStorage, StyleSheet, TextInput, TouchableOpacity, Dimensions, ToastAndroid, } from 'react-native'
import StarRating from 'react-native-star-rating';
import { Actions } from 'react-native-router-flux';
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
    cauculateHeight(e) {
        if (e.nativeEvent.contentSize.height > 30) {
            height = e.nativeEvent.contentSize.height;
        } else {
            height = this.state.height;
        }
        this.setState({
            height: height
        })
    }
    changeText(text) {
        this.setState({
            inputValue: text
        })
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    _submit = () => {
        if (this.state.inputValue == '') {
            ToastAndroid.show("请输入内容", 100)
        }
        else {
            if (this.state.starCount == 0) {
                ToastAndroid.show('请给该商品评分', 100)
            }
            else {
                var str = '?star=' + this.state.starCount + '&container=' + this.state.inputValue
                console.log(str)
                AsyncStorage.getItem('user')
                    .then((res) => {
                        let data = JSON.parse(res)
                        str += '&userid=' + data[0].userid
                        str += '&roomid=' + this.props.data.id + '&type=' + this.props.data.t
                        // console.log(str)
                        fetch('http://zy.eatclub.wang:3000/addcomment' + str, {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'text/plain'
                            },
                        })
                            .then((res) => res.json())
                            .then((res) => {
                                 
                            })
                            .catch(function (err) {
                                console.log(err);
                            })
                            fetch('http://zy.eatclub.wang:3000/changeorder?state=3&createtime='+this.props.data.createtime)
                            
                            Actions.mycomment()
                    })
                    .catch(function (err) {
                        console.log(err);
                    })
            }
        }

    }
    render() {
        {console.log(this.props.data)}
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
                <View style={styles.textInputOuter} >
                    <TouchableOpacity activeOpacity={1} style={styles.textInputInner} onPress={() => this.TextInput.focus()} >
                        <TextInput
                            placeholder={'请输入文本内容'}
                            placeholderTextColor={'#666666'}
                            underlineColorAndroid={'transparent'}
                            multiline
                            numberOfLines={5}
                            value={this.state.inputValue}
                            ref={textInput => this.TextInput = textInput}
                            onContentSizeChange={e => this.cauculateHeight(e)}
                            onChangeText={text => this.changeText(text)}
                            style={[styles.textInput, { height: this.state.height }]}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.submit}
                    // onPress={()=>{console.log(this.props.data)}}
                    onPress={() => { this._submit() }}
                >
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
        marginTop: 20,
        height: '50%',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingBottom: 0
    },
    textInputInner: {
        height: '100%',
        width: Dimensions.get('window').width,
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

