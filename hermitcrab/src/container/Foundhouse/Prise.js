import React, { Component } from 'react'
import './information.css'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

// export default class Prise extends Component {
//     render() {
//         return (
//             <div>
//                 <div className="topExit animate-route">
//                     <Link to='/'>
//                         <button className="exit1">返回</button>
//                     </Link>
//                 </div>
//             </div>
//         )
//     }
// }
export default class Prise extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'basketball'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
                <div>
                    <label>
                        <p className="choose010">价格选择：</p>
                        <select value={this.state.value} onChange={this.handleChange} className="choose02">
                            <option value="0-3">0-3元/㎡/天</option>
                            <option value="3-4">3-4元/㎡/天</option>
                            <option value="4-5">4-5元/㎡/天</option>
                            <option value="5-7">5-7元/㎡/天</option>
                            <option value="7-9">7-9元/㎡/天</option>
                            <option value="9-12">9-12元/㎡/天</option>
                        </select>
                    </label>
                    {/* <div>chosen: {this.state.value}</div> */}
                </div>
        )
    }
}
ReactDOM.render(
        <Prise/>,
    document.getElementById('root')
)
