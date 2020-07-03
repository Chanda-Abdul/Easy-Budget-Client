import React from 'react';
import { Link } from 'react-router-dom'

export default class GoToBudgetButton extends React.Component {
    render() {
        return (
            <div className="button-demo">
                <Link to="/budget">
                <button className="myButton">Review your Budget
                </button>
                </Link>
            </div>
        );
    }
}
