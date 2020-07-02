import React from 'react';
import invest from "../../images/invest.png"
import GoToBudgetButton from "../buttons/GoToBudgetButton/GoToBudgetButton"

export default function Overview(props) {
    return (
        <div className="overview-section">
        
                <h1>An entirely better way to budget</h1>

                
                <h4>
                    Easy budget helps you make progress towards your financial goals, one dollar at a time
                    <br/>
                <img src={invest} alt="investor" className="image" height="250em" width=""/>
                
                </h4>
        </div>
    );
}
