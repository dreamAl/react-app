import React, { Component } from 'react'
import "../../style/parM.css"
import ChidM from './chidM'
import Img1 from '../../img/4.1.png'
import Img2 from '../../img/4.2.png'
import Img3 from '../../img/4.3.png'
import Img4 from '../../img/4.4.png'
export default class parM extends Component {
    state={
        arr:[
            {tit:"湛江白切鸡",imgUrl:Img1},
            {tit:"秋季贴膘之煎牛排",imgUrl:Img2},
            {tit:"炸土豆",imgUrl:Img3},
            {tit:"蔬菜鸡蛋饼",imgUrl:Img4},
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
                        return <ChidM key={i} tit={v.tit} imgUrl={v.imgUrl}/>
                    })
                }
            </div>
        )
    }
}
