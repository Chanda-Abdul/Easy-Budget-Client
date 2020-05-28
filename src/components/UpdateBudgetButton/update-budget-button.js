import React from 'react';
import history from "../../history"

export default function UpdateBudgetButton(props) {
    return (
        <div className="button-update">
            <button 
            className="myButton"
            onClick={() => history.push('./create')}>Update Budget</button>
        </div>
    );
}
