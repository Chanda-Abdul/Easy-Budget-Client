import React from 'react';
import savings from "../../images/savings.png"
import invest from "../../images/invest.png"
import personalfinance from "../../images/personalfinance.png"
import GoToBudgetButton from "../GoToBudgetButton/go-to-budget-button"

export default function Overview(props) {
    return (
        <div className="overview-section">
        
                <h1>An entirely better way to budget</h1>
                
                <p>
                {/* <img src={personalfinance} className="image" height="250em" width=""/>
                <img src={savings} className="image" height="250em" width=""/>  */}
                <img src={invest} className="image" height="250em" width=""/>
                <section><GoToBudgetButton /></section>
                </p>
        </div>
    );
}
