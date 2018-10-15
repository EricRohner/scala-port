import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as routes from '../constants/Routes'
import Navigation from './Navigation'
import Home from './Home'
import Blog from './Blog'
import About from './About'

class App extends Component {
  render() {
    return <BrowserRouter>
      <div>
        <Navigation />
        <Route exact path={routes.HOME} component={() => <Home />} />
        <Route exact path={routes.BLOG} component={() => <Blog />} />
        <Route exact path={routes.ABOUT} component={() => <About />} />
      </div>
    </BrowserRouter>
  }
}

export default App