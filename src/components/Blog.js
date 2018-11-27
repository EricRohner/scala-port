import React, { Component } from "react";
//import '../mobileCSS/BlogMobile.css'
import "../deskCSS/BlogDesk.css";

export default class Blog extends Component {
  render() {
    if (window.matchMedia("(min-width: 600px)").matches) {
      return (
        <body className="blogBody">
          <div className="bLeft">
            <div className="hoverPatty">
              <p className="hoverP">Patty's Ridge</p>
              <div className="pattyImg">
                <img alt="" src="/blog/pattyfull.jpg" />
                <img alt="" src="/blog/patty.jpg" />
                <img alt="" src="/blog/pattytop.jpg" />
              </div>
            </div>
            <div className="hoverVector">
              <p className="hoverP">Vector Madness</p>
              <div className="vectorImg">
                <img alt="" src="/blog/vectorbase.jpg" />
                <img alt="" src="/blog/vectortraverse.jpg" />
                <img alt="" src="/blog/vectortop.jpg" />
              </div>
            </div>
            <div className="hoverBuena">
              <p className="hoverP">Buena Vista</p>
              <div className="buenaImg">
                <img alt="" src="/blog/buenavistafull.jpg" />
                <img alt="" src="/blog/buenavistatop.jpg" />
              </div>
            </div>
            <div className="hoverSteort">
              <p className="hoverP">Steort's Ridge</p>
              <div className="steortImg">
                <img alt="" src="/blog/steortbase.jpg" />
                <img alt="" src="/blog/steortp3.jpg" />
              </div>
            </div>
            <div className="hoverStandard">
              <p className="hoverP">Standard Ridge</p>
              <div className="standardImg">
                <img alt="" src="/blog/standardp3.jpg" />
                <img alt="" src="/blog/standardlichen.jpg" />
                <img alt="" src="/blog/standardtop.jpg" />
              </div>
            </div>
            <div className="hoverOutside">
              <p className="hoverP">Outside Corner</p>
              <div className="outsideImg">
                <img alt="" src="/blog/outsidetop.jpg" />
                <img alt="" src="/blog/outsidewave.jpg" />
              </div>
            </div>
          </div>

          <div className="bTop" />
        </body>
      );
    } else {
      return (
        <body className="blogBody">
          <p>Blog mobile</p>
        </body>
      );
    }
  }
}
