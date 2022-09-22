import React, { Component } from 'react'

export default class extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
        <div className="container">
          <a className="navbar-brand text-light" href="#">Navbar</a>
          <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <a className="nav-link text-light" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-secondary" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}
