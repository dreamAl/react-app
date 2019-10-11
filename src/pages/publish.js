import React, { Component } from 'react'
import Img from '../img/ban.png'
import '../style/publish.css'
export default class message extends Component {
    render() {
        return (
            <div className="box">
                <img src={Img} alt=""/>
            </div>
        )
    }
}