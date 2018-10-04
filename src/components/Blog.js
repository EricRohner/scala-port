import React, { Component } from 'react'
import './BlogMobile.css'
import './BlogDesk.css'


export default class Blog extends Component {
  render() {
    if (window.matchMedia('(min-width: 600px)').matches) {
      return (
        <body className="blogBody">
          <p>Blog Desk</p>
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