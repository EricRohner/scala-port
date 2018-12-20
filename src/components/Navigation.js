import React, { Component } from "react";
import * as routes from "../constants/routes";
import "../mobileCSS/NavMobile.css";
import "../deskCSS/NavDesk.css";

export default class Navigation extends Component {
  render() {
    return (
      <header className="navHeader">
        <a href={routes.HOME}> HOME </a>
        <a href={routes.BLOG}> BLOG </a>
        <a href={routes.ABOUT}> ABOUT </a>
      </header>
    );
  }
}
