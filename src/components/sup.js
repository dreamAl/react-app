import React, { Component } from 'react'
import Img1 from '../img/5.1.png'
import Img2 from '../img/5.2.png'
import Img3 from '../img/5.3.png'
import "../style/sup.css"
export default class sup extends Component {
    render() {
        return (
            <div>
                <div className="linkall">
                    <h3>精品速览</h3>
                </div>
                <div  className="imgbox">
                    <img src={Img1} alt=""/>
                <div className="right">
                    <img src={Img2} alt=""/>
                    <img src={Img3} alt=""/>
                </div>                    
                </div>                
            </div>
        )
    }
}
