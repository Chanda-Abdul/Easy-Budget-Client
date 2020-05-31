import React from 'react';
import { Link } from 'react-router-dom'

export default function GoToBudgetButton(props) {
    return (
        <div className="button-demo">
            <Link to="/Budget">
            <button className="myButton">Review your Budget
            </button>
            </Link>
        </div>
    );
}
