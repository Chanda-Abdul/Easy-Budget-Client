import React from "react";
import SignUpButton from "../buttons/SignUpButton/SignupButton";
// import DemoButton from "../buttons/DemoButton/DemoButton";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className="navigation-menu">
        <div className="topnav left">
          <Link to="/">Easy Budget</Link>
        </div>
        <div className="topnav right btn">
          <SignUpButton />
        </div>
      </nav>
    );
  }
}
