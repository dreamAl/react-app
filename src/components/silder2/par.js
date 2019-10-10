import React, { Component } from 'react'
import Chil from './chil'
import '../../style/par.css'
import Img1 from '../../img/001.png'
import Img2 from '../../img/002.png'
import Img3 from '../../img/003.png'
import Img4 from '../../img/004.png'
import Img5 from '../../img/005.png'
import Img6 from '../../img/006.png'
import Img7 from '../../img/007.png'
import Img8 from '../../img/008.png'
import Img9 from '../../img/009.png'
import Img10 from '../../img/010.png'
export default class par extends Component {
    state={
        arr:[
            {imgurl:Img1 ,tit:"甜菜根玛德琳-低卡低油版"},
            {imgurl:Img2 ,tit:"玉米汁和玉米饼的双重美味"},
            {imgurl:Img3 ,tit:"手抓饼(猪油),百分百还原路边摊的味道"},
            {imgurl:Img4 ,tit:"当归姐姐的搬运工-log24.=1.3802112417Brunch:什么都来点的早午餐"},
            {imgurl:Img5 ,tit:"迁西板栗的正确吃法"},
            {imgurl:Img6 ,tit:"简单又高颜值-培根煎蛋"},
            {imgurl:Img7 ,tit:"很随意的煎饼果子(家庭自制)"},
            {imgurl:Img8 ,tit:"减脂轻食时蔬卷"},
            {imgurl:Img9 ,tit:"减脂餐/全麦彩条蒸糕"},
            {imgurl:Img10 ,tit:"鲜肉小馄饨"}
        ]
    }
    render() {
        return (
            <div className="bak">
                <div className="linkall">
                    <h3>营养早餐</h3>
                    <a href="#">查看全部</a>
                </div> 
                <div className="flexconl">
                {
                    this.state.arr.map((v,i)=>{
                    return <Chil key={i} imgurl={v.imgurl} tit={v.tit}/>
                })  
                }
                </div>
            </div>
        )
    }
}
