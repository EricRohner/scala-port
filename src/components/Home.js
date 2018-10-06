import React, { Component } from 'react'
import './HomeMobile.css'
import './HomeDesk.css'
import Footer from "./Footer"

export default class Home extends Component {
  render() {
    return (
      <body className="home">

        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>

        <Footer></Footer>

      </body>
    )
  }
}