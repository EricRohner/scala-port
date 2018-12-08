import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as routes from "../constants/Routes";
import Navigation from "./Navigation";
import Home from "./Home";
import Blog from "./Blog";
import About from "./About";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route exact path={routes.HOME} component={Home} />
            <Route path={routes.BLOG} component={Blog} />
            <Route path={routes.ABOUT} component={About} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
