import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import  '../../style/clumn.css'
import Zclu from './zclu'
import Img1 from '../../img/2.1.png'
import Img2 from '../../img/2.2.png'
import Img3 from '../../img/2.3.png'
export default class message extends Component {
    state={
        arr:[
            {id:101,imgUrl:Img1,tit:"红烧鸡丁",eyes:83,like:1},
            {id:102,imgUrl:Img2,tit:"红烧基尾虾",eyes:79,like:2},
            {id:103,imgUrl:Img3,tit:"继续水煮基尾虾",eyes:130,like:2},
            {id:104,imgUrl:Img1,tit:"红烧鸡丁",eyes:112,like:2},
            {id:105,imgUrl:Img1,tit:"红烧鸡丁",eyes:83,like:1},
            {id:106,imgUrl:Img2,tit:"红烧基尾虾",eyes:79,like:2},
            {id:107,imgUrl:Img3,tit:"继续水煮基尾虾",eyes:130,like:2},
            {id:108,imgUrl:Img1,tit:"红烧鸡丁",eyes:112,like:2},
            {id:109,imgUrl:Img1,tit:"红烧鸡丁",eyes:83,like:1},
            {id:110,imgUrl:Img2,tit:"红烧基尾虾",eyes:79,like:2},
            {id:111,imgUrl:Img3,tit:"继续水煮基尾虾",eyes:130,like:2},
            {id:112,imgUrl:Img1,tit:"红烧鸡丁",eyes:112,like:2},
            {id:113,imgUrl:Img1,tit:"红烧鸡丁",eyes:83,like:1},
            {id:114,imgUrl:Img2,tit:"红烧基尾虾",eyes:79,like:2},
            {id:115,imgUrl:Img3,tit:"继续水煮基尾虾",eyes:130,like:2},
            {id:116,imgUrl:Img1,tit:"红烧鸡丁",eyes:112,like:2}
        ]
    }
    render() {
        return (
            <div className="listBox">
               {
                   this.state.arr.map((v,i)=>{
                       return (
                        //    params传参2.传递参数
                        <NavLink to={"/listDeilt"+v.id} key={i}>
                            <Zclu  imgUrl={v.imgUrl}
                        tit={v.tit} eyes={v.eyes} like={v.like}
                        /> 
                        </NavLink>
                       ) 
                   })
               }
            </div>
        )
    }
}