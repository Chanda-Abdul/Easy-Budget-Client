import React from 'react';
import history from "../../history"

export default function UpdateBudgetButton(props) {
    return (
        <div className="button-update">
            <button onClick={() => history.push('./update')}>Update Budget</button>
        </div>
    );
}
