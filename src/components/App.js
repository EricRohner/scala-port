import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import * as routes from '../constants/routes'
import Navigation from './Navigation'
import Home from './Home'
import Blog from './Blog'
import About from './About'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />

          <Route exact path={routes.HOME} component={() => <Home />} />
          <Route exact path={routes.BLOG} component={() => <Blog />} />
          <Route exact path={routes.ABOUT} component={() => <About />} />
        </div>
      </Router>
    )
  }
}
export default App