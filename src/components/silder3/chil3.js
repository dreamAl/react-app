import React, { Component } from 'react'
import '../../style/par3.css'
// import Img10 from '../../img/010.png'
export default class chil3 extends Component {
    render() {
        return (
            <div className="con">
                <img src={this.props.imgurl} alt=""/>
                <p>{this.props.tit}</p>                  
            </div>               
        )
    }
}
