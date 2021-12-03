import React, { Component } from 'react'
//import { HOST_API } from '../../config'
import Carousel from "./Components/carousel/Carousel"
import Content1 from "./Components/Content1/Content1"
export default class Home extends Component {
    componentDidMount(){
        console.log("home montado")
    }
    render() {
        return (
            <div>
                <Carousel></Carousel>
                <Content1></Content1>
            </div>
        )
    }
}