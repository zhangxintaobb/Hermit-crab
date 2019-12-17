import React, { Component } from 'react'
import './information.css'
import {Link, Redirect} from 'react-router-dom';
import axios from '../../model/axios'
export default class Userword extends Component {
    constructor(){
        super()
        this.state={
            data:[],
            user:[],
            status:[]
        }

    }
    componentDidMount() {
        axios({
            url: 'http://127.0.0.1:3001/commit/content',
            method: 'get',
            responsetype: 'json',
            params: {
                roomid: this.props.location.search.charAt(1)
            }
        })
            .then((response) => {
                var content=[]
                var status=[]
                for(var i=0;i<response.data.length;i++){
                        content.push(response.data[i].commit_content);
                        status.push(response.data[i].commit_status)
                    }
                this.setState(() => ({
                    data: content,
                    status:status
                }))
                let user="(";
        for(var i=0;i<response.data.length;i++){
          user=user+response.data[i].userid.toString()+","
        }
        user=user.substring(0,user.length-1)+")"
        console.log(user)
                axios({
                    url: 'http://127.0.0.1:3001/finduser',
                    method: 'get',
                    responsetype: 'json',
                    params: {
                        userid: user
                    }
                })
                    .then((response) => {
                        console.log(response.data)
                        var username=[]
                        for(var i=0;i<response.data.length;i++){
                            username.push(response.data[i].username);
                        }
                        this.setState(() => ({
                            user: username
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
        var commit=[]
        for(var i=0;i<this.state.data.length;i++){
            commit[i]={
              commit_content:this.state.data[i],
              commit_status:this.state.status[i],
              username:this.state.user[i],
            }
          }
          console.log(commit)
        return (
            <div>
                <div className="topExit animate-route">
                    <Link to={'/study-room-infor?'+this.props.location.search.charAt(1)}>
                        <button className="exit1">返回</button>
                    </Link>
                </div>
                <div className="goodorbad">
                    <div className="good animate-route">
                        <Link to='/userword'><button className="goodword">好评</button></Link>
                    </div>
                    <div className="bad animate-route">
                        <Link to='/badword'><button className="badword">差评</button></Link>
                    </div>
                </div>
                <div className="words">
                    {commit.map(item=>(
                        <div className="word001">
                            <p>{item.username+'：'+item.commit_content}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
