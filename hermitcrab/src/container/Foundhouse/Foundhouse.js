import React, { Component } from 'react'
import { Link, Switch } from 'react-router-dom';
import information from './Information';
import { SegmentedControl, WingBlank } from 'antd-mobile';
import { Tabs, WhiteSpace, Badge } from 'antd-mobile';
import $ from 'jquery';
// import { Carousel, WingBlank, Flex, Button, WhiteSpace } from 'antd-mobile';

const tabs = [
    { title: '自习室' },
    { title: '共享办公' },
];
const tabs1 = [
    { title: '位置' },
    { title: '形式' },
    { title: '价格' },
];

export default class Foundhouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 'yuhuaqu',
            value2: 'all',
            value3: '0-3',
            data1: [],
            data2: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }
    componentDidMount() {
        fetch('http://zy.eatclub.wang:3000/list/sr')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data1: res.data
                })
            })
        fetch('http://zy.eatclub.wang:3000/list/office')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data2: res.data
                })
            })
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleChange2(event) {
        this.setState({ value2: event.target.value });
    }
    handleChange3(event) {
        this.setState({ value3: event.target.value });
    }
    render() {
        return (
            <div style={{ height: '1000px' }}>
                <WhiteSpace />
                <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false} >
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', height: '100px', backgroundColor: '#fff' }}>
                        <div className="qjx001">
                            <WhiteSpace />
                            <Tabs tabs={tabs1} initialPage={2} animated={false} useOnPan={false} >
                                <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'left', height: '50px', backgroundColor: '#fff', width: '100%' }}>
                                    <div>
                                        <label>
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
                                    </div>

                                </div>
                                <div style={{ display: 'flex', alignItems: 'top', justifyContent: '', height: '50px', backgroundColor: '#fff' }}>
                                    <div>
                                        <label>
                                            <select value={this.state.value2} onChange={this.handleChange2} className="choose02">
                                                <option value="all">不限</option>
                                                <option value="smallroom">包间</option>
                                                <option value="bigroom">大厅</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'left', height: '50px', backgroundColor: '#fff' }}>
                                    <div>
                                        <label>

                                            <select value={this.state.value3} onChange={this.handleChange3} className="choose02">
                                                <option value="0-3">0-3元/㎡/天</option>
                                                <option value="3-4">3-4元/㎡/天</option>
                                                <option value="4-5">4-5元/㎡/天</option>
                                                <option value="5-7">5-7元/㎡/天</option>
                                                <option value="7-9">7-9元/㎡/天</option>
                                                <option value="9-12">9-12元/㎡/天</option>
                                            </select>
                                        </label>

                                    </div>

                                </div>
                            </Tabs>
                            <WhiteSpace />
                            {/* <div style={{height:'100px',
                             width:'100px',
                             border:'1px solid red',
                             marginTop:'10px',
                             marginLeft:'100px'
            }}>
                    1
                </div> */}
                            {/* <div className="roomestyle">
                                <div className="room01">
                                    <div className="pic01">
                                        <img src="q_images/zixishi01.jpg" style={{
                                            height: '120px',
                                            width: '200px'
                                        }}></img>
                                    </div>
                                    <div className="but01 animate-route">
                                        <Link to='/study-room-infor' className='but001'>自习室</Link>
                                    </div>
                                    <div className="txt01"><p>自习室A类</p></div>
                                </div>
                                <div className="room01">
                                    <div className="pic01">
                                        <img src="q_images/zixishi02.jpg" style={{
                                            height: '120px',
                                            width: '200px',
                                        }}></img>
                                    </div>
                                    <div className="but01">
                                        <Link to='/study-room-infor' className='but001'>自习室</Link>
                                    </div>
                                    <div className="txt01"><p>自习室A类</p></div>
                                </div>
                                <div className="room01">
                                    <div className="pic01">
                                        <img src="q_images/zixishi01.jpg" style={{
                                            height: '120px',
                                            width: '200px',
                                        }}></img>
                                    </div>
                                    <div className="but01">
                                        <Link to='/study-room-infor' className='but001'>自习室</Link>
                                    </div>
                                    <div className="txt01"><p>自习室B类</p></div>
                                </div>
                                <div className="room01">
                                    <div className="pic01">
                                        <img src="q_images/zixishi02.jpg" style={{
                                            height: '120px',
                                            width: '200px',
                                        }}></img>
                                    </div>
                                    <div className="but01">
                                        <Link to='/study-room-infor' className='but001'>自习室</Link>
                                    </div>
                                    <div className="txt01"><p>自习室B类</p></div>
                                </div>
                                <div className="room01">
                                    <div className="pic01">
                                        <img src="q_images/zixishi02.jpg" style={{
                                            height: '120px',
                                            width: '200px',
                                        }}></img>
                                    </div>
                                    <div className="but01">
                                        <Link to='/study-room-infor' className='but001'>自习室</Link>
                                    </div>
                                    <div className="txt01"><p>自习室B类</p></div>
                                </div>
                            </div>*/}
                            <div className="roomstyleonly">
                            {this.state.data1.map((value) => (
                                <div key={value.id} className="roome">
                                    <Link to='/study-room-infor'>
                                    <img src="q_images/logo001.jpg" />
                                    <div className="roomeA">
                                        <div className="roominfor">
                                            <p style={{ marginTop: '10px' }}>编号：{value.srid}</p>
                                            <p style={{ marginTop: '' }}>名称：{value.srname}</p>
                                            <p style={{}}>位置：{value.sraddress}</p>
                                            <p style={{ fontSize: '' }}>类型：{value.type}</p>
                                            <p>价格：{value.price}元/小时</p>
                                            <p>房东id：{value.ownerid}</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            ))}
                            </div>
                        </div> 

                    </div>

                    {/* part2 */}
                    <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'center', height: '100px', backgroundColor: '#fff' }}>
                        <div className="qjx001">
                            <WhiteSpace />
                            <Tabs tabs={tabs1} initialPage={2} animated={false} useOnPan={false} >
                                <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'left', height: '50px', backgroundColor: '#fff', width: '100%' }}>
                                    <div>
                                        <label>
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
                                    </div>

                                </div>
                                <div style={{ display: 'flex', alignItems: 'top', justifyContent: '', height: '50px', backgroundColor: '#fff' }}>
                                    <div>
                                        <label>
                                            <select value={this.state.value2} onChange={this.handleChange2} className="choose02">
                                                <option value="all">不限</option>
                                                <option value="smallroom">包间</option>
                                                <option value="bigroom">大厅</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'left', height: '50px', backgroundColor: '#fff' }}>
                                    <div>
                                        <label>

                                            <select value={this.state.value3} onChange={this.handleChange3} className="choose02">
                                                <option value="0-3">0-3元/㎡/天</option>
                                                <option value="3-4">3-4元/㎡/天</option>
                                                <option value="4-5">4-5元/㎡/天</option>
                                                <option value="5-7">5-7元/㎡/天</option>
                                                <option value="7-9">7-9元/㎡/天</option>
                                                <option value="9-12">9-12元/㎡/天</option>
                                            </select>
                                        </label>

                                    </div>
                                </div>
                            </Tabs>
                            <WhiteSpace />
                            {/* <div>
                                <div className="room01">
                                    <div className="pic01">
                                        <img src="q_images/office01.jpg" style={{
                                            height: '120px',
                                            width: '200px',
                                        }}></img>
                                    </div>
                                    <div className="but01">
                                        <button className="but001">办公室A</button>
                                    </div>
                                    <div className="txt03"><p>蜂巢办公室合租</p></div>
                                </div>
                                <div className="room01">
                                    <div className="pic01">
                                        <img src="q_images/office03.jpg" style={{
                                            height: '120px',
                                            width: '200px',
                                        }}></img>
                                    </div>
                                    <div className="but01">
                                        <button className="but001">办公室B</button>
                                    </div>
                                    <div className="txt03"><p>蜂巢办公室合租</p></div>
                                </div>
                                <div className="room01">
                                    <div className="pic01">
                                        <img src="q_images/office02.jpg" style={{
                                            height: '120px',
                                            width: '200px',
                                        }}></img>
                                    </div>
                                    <div className="but01">
                                        <button className="but001">办公室</button>
                                    </div>
                                    <div className="txt003"><p>包间</p></div>
                                </div>
                                <div className="room01">
                                    <div className="pic01">
                                        <img src="q_images/office02.jpg" style={{
                                            height: '120px',
                                            width: '200px',
                                        }}></img>
                                    </div>
                                    <div className="but01">
                                        <button className="but001">办公室</button>
                                    </div>
                                    <div className="txt003"><p>包间</p></div>
                                </div>
                                <div className="room01">
                                    <div className="pic01">
                                        <img src="q_images/office02.jpg" style={{
                                            height: '120px',
                                            width: '200px',
                                        }}></img>
                                    </div>
                                    <div className="but01">
                                        <button className="but001">办公室</button>
                                    </div>
                                    <div className="txt003"><p>包间</p></div>
                                </div>
                            </div> */}
                            <div className="roomstyleonly">
                            {this.state.data2.map((value) => (
                                <div key={value.id} className="roome">
                                    <Link to='/office-infor'>
                                    <img src="q_images/logo001.jpg" />
                                    <div className="roomeA">
                                        <div className="roominfor">
                                            <p>编号：{value.officeid}</p>
                                            <p style={{}}>名称：{value.officename}</p>
                                            <p style={{}}>地址：{value.officeaddress}</p>
                                            <p>价格：{value.price}元/m²/小时</p>
                                            <p style={{}}>房东id：{value.owner}</p>
                                            <p>办公室面积：{value.area}</p>
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            ))}
                            </div>
                        </div> 
                    </div> 
                </Tabs>
                <WhiteSpace />

            </div>
        )
    }
}