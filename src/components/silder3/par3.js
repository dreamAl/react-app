import React, { Component } from 'react'
import Chil3 from './chil3'
import '../../style/par3.css'
import Img1 from '../../img/1.11.png'
import Img2 from '../../img/1.12.png'
import Img3 from '../../img/1.13.png'
import Img4 from '../../img/1.14.png'
import Img5 from '../../img/1.15.png'
export default class par extends Component {
    state={
        arr:[
            {id:16,imgurl:Img1 ,tit:"最简单的自制沙拉"},
            {id:17,imgurl:Img2 ,tit:"龙利鱼沙拉"},
            {id:18,imgurl:Img3 ,tit:"秋天喝这个不仅止咳润肺皮肤变得超有弹性"},
            {id:19,imgurl:Img4 ,tit:"青州蜜桃"},
            {id:20,imgurl:Img5 ,tit:"补肾生发低卡零食之炒黑豆"},
        ]
    }
    render() {
        return (
            <div className="bak">
                <div className="linkall">
                    <h3>低脂沙拉</h3>
                    <a href="#">查看全部</a>
                </div> 
                <div className="flexcon">
                {
                    this.state.arr.map((v,i)=>{
                    return <Chil3 key={i} imgurl={v.imgurl} tit={v.tit}/>
                })  
                }
                </div>
            </div>
        )
    }
}
