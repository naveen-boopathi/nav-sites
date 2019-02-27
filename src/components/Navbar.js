import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Contact from "./Contact"
import Home from "./Home"
import About from "./About"

class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <Link className="navbar-brand" to="/">
                NAV SITE
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
              >
                <span className="navbar-toggler-icon" />
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <Link className="nav-link" to="/" component={Home}>
                      Home<span className="sr-only">(current)</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about" component={About}>
                      About Us
                  </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact" component={Contact}>
                      Contact
                  </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
  }
}

export default Navbar
