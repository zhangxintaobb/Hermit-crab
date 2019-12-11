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
const roomstyle = [
    {
        indexImage: 'q_images/zixishi01.jpg',
        name: '自习室',
        type: '自习室A类',
    },
    {
        indexImage: 'q_images/zixishi02.jpg',
        name: '自习室',
        type: '自习室B类',
    },
    {
        indexImage: 'q_images/zixishi02.jpg',
        name: '自习室',
        type: '自习室C类',
    },
    {
        indexImage: 'q_images/zixishi01.jpg',
        name: '自习室',
        type: '自习室A类',
    },
    {
        indexImage: 'q_images/zixishi02.jpg',
        name: '自习室',
        type: '自习室B类',
    },
    {
        indexImage: 'q_images/zixishi02.jpg',
        name: '自习室',
        type: '自习室C类',
    }
]
const officestyle = [
    {
        indexImage: 'q_images/office01.jpg',
        name: '办公室',
        type: '办公室A类',
    },
    {
        indexImage: 'q_images/office02.jpg',
        name: '办公室',
        type: '办公室B类',
    },
    {
        indexImage: 'q_images/office03.jpg',
        name: '办公室',
        type: '办公室C类',
    },
    {
        indexImage: 'q_images/office01.jpg',
        name: '办公室',
        type: '办公室A类',
    },
    {
        indexImage: 'q_images/office02.jpg',
        name: '办公室',
        type: '办公室B类',
    },
    {
        indexImage: 'q_images/office03.jpg',
        name: '办公室',
        type: '办公室C类',
    }
]

export default class Foundhouse extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value1: 'yuhuaqu',
            value2: 'all',
            value3: '0-3',
            data: [],
            room: roomstyle,
            office: officestyle
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
    }
    componentDidMount() {
        fetch('http://zy.eatclub.wang:3000/list/office')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.data
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
                            {this.state.room.map(val => (
                                <div key={val} className="roome">
                                    <img src={val.indexImage} />
                                    <div className="roomeA">
                                        <div className="roominfor">
                                            <Link to='/study-room-infor'><p style={{ fontSize: '20px' }}>{val.type}</p></Link>
                                            <p style={{ marginTop: '10px' }}>{val.name}</p>
                                        </div>
                                    </div>
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
                                <div style={{ display: 'flex', alignItems: 'top', justifyContent: 'left', height: '100px', backgroundColor: '#fff', width: '100%' }}>
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
                            {this.state.office.map(val => (
                                <div key={val} className="roome">
                                    <img src={val.indexImage} />
                                    <div className="roomeA">
                                        <div className="roominfor">
                                            <p style={{ fontSize: '20px' }}>{val.type}</p>
                                            <p style={{ marginTop: '10px' }}>{val.name}</p>
                                        </div>
                                    </div>
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