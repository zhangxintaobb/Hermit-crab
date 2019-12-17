import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import './information.css'
import axios from '../../model/axios'
import store from '../../store';
export default class Information extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            currentIndex: 1,
            collect:0
        }
    }
    componentDidMount(){
    axios({
        url: 'http://127.0.0.1:8081/studyroom',
        method: 'get',
        responsetype:'json',
        params: {
            srid:this.props.location.search.charAt(1)
        }
      })
      .then((response)=> {
        console.log(response)
        this.setState(() => ({
            data: response.data[0],
        }))
      })
      .catch(function (error) {
        console.log(error);
      })
      axios({
        url: 'http://127.0.0.1:3001/collection/srinfor',
        method: 'get',
        responsetype: 'json',
        params: {
            srid: this.props.location.search.charAt(1),
            userid: store.getState().login.userid
        }
    })
        .then((response) => {
            console.log(response)
            if(response.data.data==undefined){
                console.log(response.data.data)
            }
            else{
                this.setState({
                    currentIndex: 0
                })
            }
        })
        .catch(function (error) {
            console.log(error);
        })

    }
    collection=()=>{
        if (this.state.currentIndex == 0) {
            this.setState({
                currentIndex: 1
            })
        }
        ////当是显示状态时，点击后消失
        else {
            this.setState({
                currentIndex: 0
            })
        }
    }
    render() {
        return (
            <div>
                <div className="topExit animate-route">
                    <Link to='/'>
                      <button className="exit1">退出</button>
                    </Link>
                </div>
                <div className="img01">
                    <img src="q_images/zixishi03.jpg" style={{
                        width: '100%',
                        height:'200px'
                    }}></img>
                </div>
                <Link to='/importantinfor'><div className="txt02">
                <h3>-{this.state.data.srname}-</h3>
                    <div className="score"><p>4.6分</p></div>
                <p>位置：{this.state.data.sraddress}</p>
                    {/* <p>占地面积：20㎡</p> */}
                <p>类型：{this.state.data.type}</p>
                <p>价格：{this.state.data.price}元/小时</p>
                    {/* <p>房东id：01</p> */}
                </div></Link>
                <div className="middleinfor animate-route">
                    <Link to='/importantinfor'>
                        <button className="exit2">详细信息</button>
                    </Link>
                </div>
                <div className="userword01 animate-route">
                    <Link to='/userword'>
                        <h3>用户评价(27)</h3>
                        <p>BetterMe_8601:打分：五星。
                        交通非常便利，环境是一个屋子，不过真的好安静，密码锁特别静音，里面有好多标志都很可爱，听不见外面的噪音，总的来说非常不错。</p>
                        <p>......</p>
                    </Link>
                </div>
                <div className="talktouser">
                    <Link to=''>
                        <button className="exit3">联系店主</button>
                    </Link>
                </div>
                <div className="likebest" style={{display: (0 === this.state.currentIndex) ? "block" : "none"}}
                onClick={()=>this.collection()}>
                    {/* <Link to='/myself/collection'> */}
                        <button className="exit4">收藏</button>
                    {/* </Link> */}
                </div>
                <div className="likebest" style={{display: (1 === this.state.currentIndex) ? "block" : "none"}}
                onClick={()=>this.collection()}>
                    {/* <Link to='/myself/collection'> */}
                        <button className="exit4a">收藏</button>
                    {/* </Link> */}
                </div>
            </div>
        )
    }
}
