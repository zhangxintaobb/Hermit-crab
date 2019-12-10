import React, { Component } from 'react'
import './information.css'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

export default class Form extends React.Component {
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
                        <p className="choose010">形式选择：</p>
                        <select value={this.state.value} onChange={this.handleChange} className="choose02">
                            <option value="all">不限</option>
                            <option value="smallroom">包间</option>
                            <option value="bigroom">大厅</option>
                        </select>
                    </label>
                    {/* <div>已选： {this.state.value}</div> */}
                </div>
        )
    }
}
ReactDOM.render(
        <Form/>,
    document.getElementById('root')
)
