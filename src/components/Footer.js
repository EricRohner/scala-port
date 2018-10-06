import React, {Component} from 'react';
import './FooterMobile.css';
import './FooterDesk.css'

export default class extends Component {
  render() {
    return(
    <footer className="Footer">
      <p>Contact:</p>
      <div className='footerContainer'>
        <div>
          <p>(360) 791-5099</p>
          <p className="divider">EricRohner22@gmail.com</p>
        </div>
        <div>
          <p>Marmelade District</p>
          <p>Salt Lake City, UT</p>
        </div>
      </div>
    </footer>
    )
  }
}
