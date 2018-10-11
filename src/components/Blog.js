import React, { Component } from 'react'
import '../mobileCSS/BlogMobile.css'
import '../deskCSS/BlogDesk.css'

export default class Blog extends Component {
  render() {
    if (window.matchMedia('(min-width: 600px)').matches) {
      return (
        <body className="blogBody">
          <div className="bLeft">
            <div className="hoverDiv">
              <p>Patty's Ridge</p>
              <div className="pattyImg">
                <img src="/blog/pattyfull.jpg" />
                <img src="/blog/patty.jpg" />
                <img src="/blog/pattytop.jpg" />
              </div>
            </div>
            <div className="hoverDiv">
              <p className="hoverP">Buena Vista</p>
              {/*<div className="buenaImg">*/}
                {/*<img src="/blog/buenavistafull.jpg" />*/}
                {/*<img src="/blog/buenavistatop.jpg" />*/}
              {/*</div>*/}
            </div>
            <div className="hoverDiv">
              <p className="hoverP">Steort's Ridge</p>
            </div>
          </div>


          <div className="bTop"></div>
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