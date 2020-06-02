import React from 'react';
import savings from "../../images/savings.png"

export default function Overview(props) {
    return (
        <div className="overview-section">
        
                <h1>An entirely better way to budget</h1>
                <p>
                <img src={savings} className="image" height="250" width=""/>
                <img src={savings} className="image" height="250" width=""/> 
                <img src={savings} className="image" height="250" width=""/>
                </p>
        </div>
    );
}
