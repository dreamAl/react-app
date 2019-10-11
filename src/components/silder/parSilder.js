import React, { Component } from 'react'
import ChilSilder from './chilSilder'
import  '../../style/silder.css'
import Img1 from '../../img/1.png'
import Img2 from '../../img/2.png'
import Img3 from '../../img/3.png'
import Img4 from '../../img/4.png'
import Img5 from '../../img/5.png'
export default class parSilder extends Component {
    state={
        arr:[
            {id:1,imgUrl:Img1},
            {id:2,imgUrl:Img2},
            {id:3,imgUrl:Img3},
            {id:4,imgUrl:Img4},
            {id:5,imgUrl:Img5}
        ]
    }
    render() {
        var newarr=this.state.arr.map((v,i)=>{
            return <ChilSilder key={i} imgUrl={v.imgUrl} />
        })
        return (
            <div className="pic">
                {newarr} 
            </div>
        )
    }
}
