import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import  '../style/routercom.css'
import { Icon } from 'antd';
import Img from '../img/add.svg'
export default class routercom extends Component {
    render() {
        return (
            <div className="tabBar">
                <NavLink to="/index" activeClassName="tabCor">
                    <Icon type="home" theme="filled"/><br/>
                    首页
                </NavLink>
                <NavLink to="/community" activeClassName="tabCor">
                    <Icon type="fire" /><br/>
                    社区   
                </NavLink>
                <NavLink to="/publish" activeClassName="tabCor" id="third">
                    <i><img src={Img} alt=""/></i>
                    发布
                </NavLink>
                <NavLink to="/message" activeClassName="tabCor">
                    <Icon type="bell" /><br/>
                    消息
                </NavLink>
                <NavLink to="/my" activeClassName="tabCor">
                    <Icon type="user" /><br/>
                    我的
                </NavLink>
            </div>
        )
    }
}
