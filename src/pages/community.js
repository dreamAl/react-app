import React, { Component } from 'react'
import TopBar from '../components/topBar/topBar'
import Pclu from '../components/clumn/pclu'
export default class message extends Component {
    render() {
        return (
            <div>
                <TopBar/>
                <Pclu/>
            </div>
        )
    }
}