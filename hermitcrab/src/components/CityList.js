import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Grid } from 'antd-mobile';

const city = [
    '北京', '上海', '广州', '深圳', '成都', '武汉', '重庆', '杭州', '天津', '南京', '厦门', '石家庄', '沈阳', '青岛', '郑州' 
];

const data = Array.from(city).map((_val, i) => ({
    icon: 'icons/city.svg',
    text: `${_val}`,
}));

export default function CityList() {

    return(
        <div>
            <div style={{height:'30px',borderBottom:'solid 1px #000'}}>
                <Link to='/'>
                    <img src='icons/close.svg' style={{width:'30px',height:'30px'}}/>
                </Link>
                <p style={{display:'inline-block',position:'relative',top:'-8px',left:'120px'}}>选择城市</p>
            </div>
            <Grid 
                data={data} 
                hasLine={false} 
                columnNum={3}
                onClick={() => {console.log()}}
            />
        </div>
    )
}