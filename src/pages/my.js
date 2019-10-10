import React, { Component } from 'react'
import TopBar from '../components/topBar/topBar'
import  '../style/my.css'
import Img1 from '../img/head.png'
import Img2 from '../img/empty.png'
export default class my extends Component {
    render() {
        return (
            <div>
               <TopBar/>
               <div className="page">
                   <div className="pageTop">
                    <img src={Img1} alt=""/>
                    <p>未登录</p>
                    <span>点击设计签名</span>
                   </div>
                   <div className="pageCon">
                        <p>
                            <i>0</i>
                            <b>关注</b>
                        </p>
                        <p>
                            <i>0</i>
                            <b>粉丝</b>
                        </p>
                        <p>
                            <i>0</i>
                            <b>收藏</b>
                        </p>
                   </div>
                   <div className="pageBot">
                        <img src={Img2} alt=""/>
                        <p>您还没有发布内容</p>
                   </div>
               </div>
            </div>
        )
    }
}
