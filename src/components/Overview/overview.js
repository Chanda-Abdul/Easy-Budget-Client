import React from 'react';
import invest from "../../images/invest.png"
import GoToBudgetButton from "../GoToBudgetButton/go-to-budget-button"

export default function Overview(props) {
    return (
        <div className="overview-section">
        
                <h1>An entirely better way to budget</h1>
                
                <p>
                <img src={invest} alt="investor" className="image" height="250em" width=""/>
                <section><GoToBudgetButton /></section>
                </p>
        </div>
    );
}
