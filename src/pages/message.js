import React, { Component } from 'react'
import TopBar from '../components/topBar/topBar'
import  '../style/message.css'
export default class message extends Component {
    render() {
        return (
            <div>
                 <TopBar/>
                 <p className="ptext">你还没有消息呢</p>
            </div>
        )
    }
}
