import React from "react";
import SignUpButton from "../signup-button";
import DemoButton from "../DemoButton/demo-button";

export default function NavBar(props) {
  return (
    <nav className="navigation-menu">
      <div className="topnav-left">Easy Budget</div>
      <div className="topnav-right">
        <DemoButton />
      </div>
      <div className="topnav-right">
        <SignUpButton />
      </div>
    </nav>
  );
}
