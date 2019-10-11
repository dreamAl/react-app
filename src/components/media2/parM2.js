import React, { Component } from 'react'
import "../../style/parM.css"
import ChidM2 from './chidM2'
import Img1 from '../../img/6.1.png'
import Img2 from '../../img/6.2.png'
import Img3 from '../../img/6.3.png'
import Img4 from '../../img/6.4.png'
export default class parM extends Component {
    state={
        arr:[
            {id:25,tit:"孜然羊肉",imgUrl:Img1},
            {id:26,tit:"老丁的私房菜-糖醋里脊",imgUrl:Img2},
            {id:27,tit:"辣味粉蒸排骨",imgUrl:Img3},
            {id:28,tit:"糖醋酸辣鸡丁",imgUrl:Img4},
        ]
    }
    render() {
        return (
            <div>
                 <div className="linkall">
                    <h3>美味午餐</h3>
                    <a href="#">查看全部</a>
                </div> 
                {
                    this.state.arr.map((v,i)=>{
                        return <ChidM2 key={i} tit={v.tit} imgUrl={v.imgUrl}/>
                    })
                }
            </div>
        )
    }
}
