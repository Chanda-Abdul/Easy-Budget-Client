import React from 'react';
import history from '../../history'

export default function LearnMoreButton(props) {
    return (
        <div className="button-learn">
            <button 
            className="myButton"
            onClick={() => history.push('./learn')}>Learn More</button>
        </div>
    );
}
