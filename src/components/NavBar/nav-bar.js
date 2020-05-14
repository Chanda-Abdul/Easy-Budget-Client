import React from 'react';
import SignUpButton from "../SignUpButton/signup-button"
import DemoButton from "../DemoButton/demo-button"

export default function NavBar(props) {
    return (
        <nav className="navigation-menu">
           Easy Budget
           <SignUpButton/>
           <DemoButton/>
        </nav>
    );
}
