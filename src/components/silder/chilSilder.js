import React, { Component } from 'react'
import  '../../style/silder.css'
// import Img from '../../img/1.png'
export default class chilSilder extends Component {
    render() {
        return (
            <div className="picOne">
                <img src={this.props.imgUrl} alt=""/>
            </div>
        )
    }
}
