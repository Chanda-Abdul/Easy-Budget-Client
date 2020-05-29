import React from "react";
import SignUpButton from "../SignUpButton/signup-button";
import DemoButton from "../DemoButton/demo-button";
import { Link } from 'react-router-dom'
// import history from "../../history"
import "./NavBar.css"


export default function Navigation(props) {
  return (
    <nav className="navigation-menu">
      <div className="topnav left">
<Link to="/">
  Easy Budget
  </Link>
        </div>
      <div className="topnav right btn">
        <DemoButton/>
      </div>
      <div className="topnav right btn">
        <SignUpButton />
      </div>
    </nav>
  );
}
