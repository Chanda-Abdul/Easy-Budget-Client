import React from "react";
import SignUpButton from "../SignUpButton/signup-button";
import DemoButton from "../DemoButton/demo-button";
// import history from ".../.history"

export default function Navigation(props) {
  return (
    <nav className="navigation-menu">
      <div className="topnav-left">Easy Budget</div>
      <div className="topnav-right">
        <DemoButton/>
      </div>
      <div className="topnav-right">
        <SignUpButton />
      </div>
    </nav>
  );
}
