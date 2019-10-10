import React, { Component } from 'react'
import "../../style/parM.css"
export default class chidM extends Component {
    render() {
        return (
            <div className="cons">
                <p>{this.props.tit}</p>
                <img src={this.props.imgUrl} alt=""/>
            </div>
        )
    }
}
