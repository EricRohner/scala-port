import React, { Component } from 'react'
import '../mobileCSS/HomeMobile.css'
import '../deskCSS/HomeDesk.css'
import Footer from './Footer'

export default class Home extends Component {

  constructor() {
    super()

    this.state = { x1: 160, x2: 167, x3: 174, x4: 144, y1: 107, y2: 118, y3: 127, y4: 80, }
  }

  handleMouseMove = (event) => {
    const widthSin = event.clientX / window.innerWidth
    const heightSin = event.clientY / window.innerHeight
    const heightOffset = window.innerHeight / 10 + 75
    const widthOffset = window.innerWidth / 10
    const iw = window.innerWidth / 100
    const ih = window.innerHeight /100

    this.setState({
      x1: Math.sin(widthSin) * iw + widthOffset,
      y1: Math.sin(heightSin) * ih + heightOffset,
      x2: Math.sin(widthSin + 0.78) * iw + widthOffset,
      y2: Math.sin(heightSin + 0.78) * ih + heightOffset,
      x3: Math.sin(widthSin + 1.57) * iw + widthOffset,
      y3: Math.sin(heightSin + 1.57) * ih + heightOffset,
      x4: Math.sin(widthSin + 2.35) * iw * 1.75 + widthOffset,
      y4: Math.sin(heightSin + 2.35) * ih * 1.75 + 75,
    })
  }

  render() {
    if (window.matchMedia('(min-width: 600px)').matches) {
      return (
        <body className="home" onMouseMove={this.handleMouseMove}>

          <div className="hleft"></div>
          <div className="hright"></div>
          <div className="htop"></div>
          <div className="hbottom"></div>

          <img src="/home/Layer1.png"
               alt=""
               style={{
                 position: 'absolute',
                 left: this.state.x1,
                 top: this.state.y1,
                 height: '75vh',
                 width: '75vw'
               }} />
          <img src="/home/Layer2.png"
               alt=""
               style={{
                 position: 'absolute',
                 left: this.state.x2,
                 top: this.state.y2,
                 height: '75vh',
                 width: '75vw'
               }} />
          <img src="/home/Layer3.png"
               alt=""
               style={{
                 position: 'absolute',
                 left: this.state.x3,
                 top: this.state.y3,
                 height: '75vh',
                 width: '75vw'
               }} />
          <img src="/home/Layer4.png"
               className="tree"
               alt=""
               style={{
                 position: 'absolute',
                 left: this.state.x4,
                 top: this.state.y4,
                 height: '85vh',
                 width: '85vw',
               }} />
          <Footer />
        </body>
      )
    }
    else {
      return (
        <div></div>
      )
    }
  }
}