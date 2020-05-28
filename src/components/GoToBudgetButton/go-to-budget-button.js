import React from 'react';
import history from '../../history'

export default function GoToBudgetButton(props) {
    return (
        <div className="button-demo">
            <button className="myButton"
            onClick={() => history.push('./budget')}>Review your Budget</button>
        </div>
    );
}
