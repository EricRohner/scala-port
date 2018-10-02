import React, {Fragment, Component} from 'react';
import * as routes from '../constants/routes'
import './ComponentStyles.css'

export default class Navigation extends Component {
  render() {
    return(
      <header className="navHeader">
        <a href={routes.HOME}> HOME </a>
        <a href={routes.BLOG}> BLOG </a>
        <a href={routes.ABOUT}> ABOUT </a>
      </header>
    )
  }
}

