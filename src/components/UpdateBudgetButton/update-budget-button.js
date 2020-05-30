import React from 'react';
import { Link } from "react-router-dom"

export default function UpdateBudgetButton(props) {
    return (
        <div className="button-update">
            <Link to="/Create"><button 
            className="myButton">Update Budget</button></Link>
        </div>
    );
}
