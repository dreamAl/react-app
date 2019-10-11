import React, { Component } from 'react'
import TopBar from '../components/topBar/topBar'
import Banner from '../components/banner/banner'
import ParSilder from '../components/silder/parSilder'
import Par from '../components/silder2/par'
import Par3 from '../components/silder3/par3'
import ParM from '../components/media1/parM'
import Sup from '../components/sup'
import ParM2 from '../components/media2/parM2'
import   '../style/index.css'
import { Input } from 'antd';
const { Search } = Input;
export default class index extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <div className="bodyH">
                    <Search className="search"
                        placeholder="搜索食谱、食材"
                        onSearch={value => console.log(value)}/>
                    <Banner/>
                    <ParSilder/>
                    <Par/>
                    <Par3/>
                    <ParM/>
                    <Sup/>
                    <ParM2/>
                </div>                
            </div>                
        )
    }
}
