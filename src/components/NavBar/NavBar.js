import React from "react";
import SignUpButton from "../buttons/SignUpButton/SignupButton";
import DemoButton from "../buttons/DemoButton/DemoButton";
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
