import React, { Component, Fragment } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Navbar from "./Navbar"
import MainPage from "./MainPage"
import "../styles/App.css"

class App extends Component {
  render() {
    return (
      <Router className="main">
        <Fragment>
          <Navbar />
          <MainPage />
        </Fragment>
      </Router>
    )
  }
}

export default App
