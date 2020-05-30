import React, { Component } from 'react';
import { Link } from 'react-router-dom'


export default function DemoButton(props) {
    return (
        <div className="button-demo">
            <Link to="/Dashboard"><button  
            className="myButton"
            >Demo</button>
            </Link>
        </div>
    );
}
