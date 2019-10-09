import React, { Component } from 'react'
import   '../../style/topBar.css'
import {Icon} from 'antd'
export default class topBar extends Component {
    render() {
        return (
            <div className="topBar">
                <p>首页</p>
                <Icon type="redo" rotate="270"/>
                {/* <Icon type="setting" /> */}
            </div>
        )
    }
}
