import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Contact</h1>
        <nav>
          <Link to="/">
            <p>HOME</p>
          </Link>
          <Link to="/new-contact">
            <p>NEW CONTACT</p>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
