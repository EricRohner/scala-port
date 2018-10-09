import React, { Component } from 'react'
import Footer from './Footer'
import '../mobileCSS/AboutMobile.css'
import '../deskCSS/AboutDesk.css'

export default class About extends Component {
  constructor() {
    super()
    this.state = { x1: 152, x2: 158, x3: 155, x4: 148, y1: 141, y2: 146, y3: 128, y4: 84 }
  }

  handleMouseMove = (event) => {
    const widthSin = event.clientX / window.innerWidth
    const heightSin = event.clientY / window.innerHeight
    const heightOffset = window.innerHeight / 10 -15
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
      y4: Math.sin(heightSin + 2.35) * ih * 1.75 ,
    })
  }

  render() {
    if (window.matchMedia('(min-width: 600px)').matches) {
      return (
        <body className="about">
          <div onMouseMove={this.handleMouseMove}>
            <div className='atop'></div>
            <div className='abottom'></div>
            <div className='aright'></div>
            <div className='aleft'>
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
    else{
      return(
        <div>About Mobile</div>
      )
    }
  }
}