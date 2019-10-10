import React, { Component } from 'react'
import '../../style/par.css'
export default class chil extends Component {
    render() {
        return (
            <div className="cong">
                <img src={this.props.imgurl} alt=""/>
                <p>{this.props.tit}</p>                  
            </div>               
        )
    }
}
