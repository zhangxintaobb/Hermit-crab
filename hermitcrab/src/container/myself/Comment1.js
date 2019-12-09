import React from 'react';
import axios from '../../model/axios'
export default class Comment extends React.Component{
constructor(props){ //构造函数
super(props);
this.state = {
mytext : '',
}
}

getData(){ //请求数据函数
fetch(`http://127.0.0.1:8081/json`,{
method: 'GET'
}).then(res => res.json()).then(
data => {
this.setState({mytext:data})
}
)
}


componentWillMount(){
this.getData();

axios({
    url: 'http://127.0.0.1:8081/json',
    method: 'get',
    responsetype:'json',
    params: {
      firstName: 'Fred',
      lastName: 'Flintstone'
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
})

}


render(){

return(
<div>
<div>{this.state.mytext.name}</div>
<div>{this.state.mytext.price}</div>
<div>{this.state.mytext.date}</div>
</div>
);
}
}
