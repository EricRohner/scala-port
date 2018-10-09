import React, { Component } from 'react'
import '../mobileCSS/BlogMobile.css'
import '../deskCSS/BlogDesk.css'


export default class Blog extends Component {
  render() {
    if (window.matchMedia('(min-width: 600px)').matches) {
      return (
        <body className="blogBody">
          <div className="bleft"></div>
          <div className="btop"></div>

        </body>
      )
    } else {
      return (
        <body className="blogBody">
          <p>Blog mobile</p>
        </body>
      )
    }
  }
}