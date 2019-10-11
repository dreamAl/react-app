import React, { Component } from 'react'
import TopBar from '../components/topBar/topBar'
import Pclu from '../components/clumn/pclu'
export default class message extends Component {
    // params传参3.接收参数
    componentDidMount(){
         console.log(this.props.match.params.id)
    }
    render() {
        return (
            <div>
                <TopBar/>
                <Pclu/>
            </div>
        )
    }
}