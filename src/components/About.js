import React, { Component } from 'react'
import Footer from './Footer'
import '../mobileCSS/AboutMobile.css'
import '../deskCSS/AboutDesk.css'

export default class About extends Component {
  constructor() {
    super()
    this.state = {
      x1: window.innerWidth * 152 / 1400,
      x2: window.innerWidth * 158 / 1400,
      x3: window.innerWidth * 155 / 1400,
      x4: window.innerWidth * 148 / 1400,
      y1: window.innerHeight * 66 / 803,
      y2: window.innerHeight * 75 / 803,
      y3: window.innerHeight * 53 / 803,
      y4: window.innerHeight * 9 / 803
    }
  }

  handleMouseMove = (event) => {
    const widthSin = event.clientX / window.innerWidth
    const heightSin = event.clientY / window.innerHeight
    const heightOffset = window.innerHeight / 10 - 15
    const widthOffset = window.innerWidth / 10
    const iw = window.innerWidth / 100
    const ih = window.innerHeight / 100

    this.setState({
      x1: Math.sin(widthSin) * iw + widthOffset,
      y1: Math.sin(heightSin) * ih + heightOffset,
      x2: Math.sin(widthSin + 0.78) * iw + widthOffset,
      y2: Math.sin(heightSin + 0.78) * ih + heightOffset,
      x3: Math.sin(widthSin + 1.57) * iw + widthOffset,
      y3: Math.sin(heightSin + 1.57) * ih + heightOffset - 20,
      x4: Math.sin(widthSin + 2.35) * iw * 1.75 + widthOffset,
      y4: Math.sin(heightSin + 2.35) * ih * 1.75,
    })
  }

  render() {
    if (window.matchMedia('(min-width: 600px)').matches) {
      return (
        <body className="about">
          <div onMouseMove={this.handleMouseMove}>
            <div className='aTop'></div>
            <div className='aBottom'></div>
            <div className='aRight'></div>
            <div className='aLeft'>
            </div>
            <img src="/about/Layer1.png"
                 alt=""
                 style={{
                   position: 'absolute',
                   left: this.state.x1,
                   top: this.state.y1,
                   height: '80vh',
                   width: '80vw'
                 }} />
            <img src="/about/Layer2.png"
                 alt=""
                 style={{
                   position: 'absolute',
                   left: this.state.x2,
                   top: this.state.y2,
                   height: '80vh',
                   width: '80vw'
                 }} />
            <img src="/about/Layer3.png"
                 alt=""
                 style={{
                   position: 'absolute',
                   left: this.state.x3,
                   top: this.state.y3,
                   height: '80vh',
                   width: '80vw'
                 }} />
            <img src="/about/Layer4.png"
                 alt=""
                 style={{
                   position: 'absolute',
                   left: this.state.x4,
                   top: this.state.y4,
                   height: '85vh',
                   width: '85vw'
                 }} />
          </div>

          <Footer />
        </body>
      )
    }
    else {
      return (
        <div>About Mobile</div>
      )
    }
  }
}