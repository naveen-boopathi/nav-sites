import React, { Component, Fragment } from 'react'
import { Route } from "react-router-dom"
import Contact from "./Contact"
import Home from "./Home"
import About from "./About"

export class MainPage extends Component {
  render() {
    return (
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Fragment>
    )
  }
}

export default MainPage
