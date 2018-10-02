import React, { Fragment, Component } from 'react'

export default class Home extends Component {
  render() {
    return (
      <body className="home">
        <div className="left"></div>
        <div className="right"></div>
        <div className="top"></div>
        <div className="bottom"></div>

        <footer>
          <p className="contact">Contact:</p>
          <div className='footerContainer'>
            <div>
              <p>(360) 791-5099</p>
              <p>EricRohner22@gmail.com</p>
            </div>
            <div>
              <p>Marmelade District</p>
              <p>Salt Lake City, UT</p>
            </div>
          </div>
        </footer>
      </body>
    )
  }
}