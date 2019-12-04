import React, { Component } from 'react'
import { HashRouter as Router, Route } from 'react-router-dom';
import { Link, Switch } from 'react-router-dom';
import './Home.css'
import CityList from './CityList'
import { Carousel, WingBlank, Flex, Button, WhiteSpace } from 'antd-mobile';

const city = [
    '北京', '上海', '广州', '深圳', '成都', '武汉', '重庆', '杭州', '天津', '南京', '厦门', '石家庄', '沈阳', '青岛', '郑州'
];

const roomMes = [
    {
        indexImage: 'z_images/c1.jpg',
        name: '自习室A',
        type: '自习室',
        price: '500',

    },
    {
        indexImage: 'z_images/c2.jpg',
        name: '办公室A',
        type: '办公室',
        price: '5000',
    },
    {
        indexImage: 'z_images/c3.jpg',
        name: '办公室B',
        type: '办公室',
        price: '6000',
    }
]


export default class Home extends Component {

    constructor() {
        super();
        this.state = {
            data: ['1', '2', '3'],
            imgHeight: 176,
            area: ['裕华区', '桥西区', '桥东区', '长安区', '藁城区', '鹿泉区', '正定县', '无极县'],
            room: roomMes
        }
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
        //     });
        // }, 100);
    }

    render() {
        return (
            <div>
                <WhiteSpace />
                <div className='top_bar animate-route' style={{ height: '25px' }}>
                    <Link to='/citylist' className='area'>地区</Link>
                    <input type='text' style={{ top: '-16px', marginLeft: '50px' }} placeholder='请输入你要查找的自习室/办公室信息' />
                </div>
                <WhiteSpace />
                <Carousel
                    autoplay={true}
                    infinite
                >
                    {this.state.data.map(val => (
                        <a
                            key={val}
                            href="#"
                            style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                        >
                            <img
                                src={`z_images/c${val}.jpg`}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top' }}
                                onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                }}
                            />
                        </a>
                    ))}
                </Carousel>
                <WingBlank size='md'>
                    <div className='hot_area'>
                        <p>热门区域</p>
                        <div className='area_box'>
                            {this.state.area.map(val => (
                                <a key={val} className='e_area'>{val}</a>
                            ))}
                        </div>
                    </div>
                    <div className='img_show flex-container'>
                        <Flex>
                            <Flex.Item className='is_left'>
                                <img src='z_images/c1.jpg' />
                            </Flex.Item>
                            <Flex.Item>
                                <Flex direction='column' align='baseline'>
                                    <Flex.Item className='is_right_top'>
                                        <img src='z_images/c2.jpg' />
                                    </Flex.Item>
                                    <Flex.Item className='is_right_top' style={{ marginTop: '5px' }}>
                                        <img src='z_images/c3.jpg' />
                                    </Flex.Item>
                                </Flex>
                            </Flex.Item>
                        </Flex>
                    </div>
                    <div className='youlike'>
                        <p>猜你喜欢</p>
                        <div className='like_box'>
                            {this.state.room.map(val => (
                                <div key={val} className='room_box'>
                                    <img src={val.indexImage} />
                                    <div className='mes_box'>
                                        <div className='mes_box_top'>
                                            <p style={{ fontSize: '20px' }}>{val.type}</p>
                                            <p style={{ marginTop: '10px' }}>{val.name}</p>
                                        </div>
                                        <div className='mes_box_bottom'>
                                            <p>
                                                <span style={{ color: '#ef6f0d', fontSize: '20px' }}>{val.price}</span>
                                                <span style={{ fontSize: '12px' }}>元/月</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div class='like_more'>
                                <Link to=''>
                                    <Button className='more_btn'>查看更多自习室/办公室信息</Button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </WingBlank>
            </div>
        )
    }
}
