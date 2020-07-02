import React from 'react';
import { Link } from 'react-router-dom';

export default class LearnMoreButton extends React.Component {
    render() {
        return (
        <div className="button-learn">
             <Link to="/Learn">
            <button className="myButton">Learn More
            </button>
            </Link>
        </div>
    );
}
}
