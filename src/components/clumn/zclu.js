import React, { Component } from 'react'
import  '../../style/clumn.css'
import { Icon } from 'antd';
import Img from '../../img/head.png'
export default class message extends Component {
    render() {
        return (
            <div className="list">
               <img src={this.props.imgUrl} alt=""/>
               <p>{this.props.tit}</p>
               <span>
                    <Icon type="eye" theme="filled" />
                   &nbsp;&nbsp;<b>{this.props.eyes}</b>
                    <Icon type="heart" theme="filled" />
                    &nbsp;&nbsp;<b>{this.props.like}</b>
                </span>
                <div className="listBott">
                    <img src={Img} alt=""/>
                    &nbsp;&nbsp;<span>jjjjj</span>
                </div>
            </div>
        )
    }
}