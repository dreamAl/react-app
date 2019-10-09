import React, { Component } from 'react'
import TopBar from '../components/topBar/topBar'
import Banner from '../components/banner/banner'
import ParSilder from '../components/silder/parSilder'
import   '../style/index.css'
import { Input } from 'antd';
const { Search } = Input;
export default class index extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <Search className="search"
                    placeholder="搜索食谱、食材"
                    onSearch={value => console.log(value)}/>
                <Banner/>
                <ParSilder/>
             </div>
        )
    }
}
