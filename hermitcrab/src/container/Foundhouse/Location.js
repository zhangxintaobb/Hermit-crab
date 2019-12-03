import React, { Component } from 'react'
import './information.css'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

// export default class Location extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="topExit animate-route">
//                     <Link to='/'>
//                         <button className="exit1">返回</button>
//                     </Link>
//                 </div>
//                 <div></div>
//             </div>
//         )
//     }
// }
export default class Location extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'yuhuaqu'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
                <div>
                    <label>
                        <p className="choose010">位置选择：区域</p>
                        <select value={this.state.value} onChange={this.handleChange} className="choose02">
                            <option value="yuhuaqu">裕华区</option>
                            <option value="qiaoxiqu">桥西区</option>
                            <option value="qiaodongqu">桥东区</option>
                            <option value="changanqu">长安区</option>
                            <option value="gaochengqu">藁城区</option>
                            <option value="luquanqu">鹿泉区</option>
                            <option value="zhengdingxian">正定县</option>
                            <option value="wujixian">无极县</option>
                        </select>
                    </label>
                    {/* <div>已选: {this.state.value}</div> */}
                </div>
        )
    }
}
ReactDOM.render(
        <Location/>,
    document.getElementById('root')
)
