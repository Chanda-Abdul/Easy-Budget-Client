import React, { Component } from 'react';
import history from '../../history'


export default function DemoButton(props) {
    return (
        <div className="button-demo">
            <button  
            className="myButton"
            onClick={() => history.push('./Dashboard')}>Demo</button>
        </div>
    );
}
