import React from 'react';
import history from '../../history'

export default function LearnMoreButton(props) {
    return (
        <div className="button-learn">
            <button onClick={() => history.push('./education')}>Learn More</button>
        </div>
    );
}
