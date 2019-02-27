import React, { Component } from "react"
import Navbar from "./Navbar.js"
import "../styles/App.css"

class App extends Component {
  render() {
    return (
      <div className="main">
        <Navbar />
      </div>
    );
  }
}

export default App
