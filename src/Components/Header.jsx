import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/home">
            Home | <Link to="/contact">Contact</Link>
          </Link>{" "}
          | <Link to="/about">About</Link>
        </nav>
        <div>
          <h2>Welcome To My Portfolio</h2>
          <div className="background-picture">
            <img src="Background_photo.jpeg" alt="" width="300" height="400" />
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
