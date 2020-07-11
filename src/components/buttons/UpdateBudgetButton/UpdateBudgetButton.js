import React from 'react';
import { Link } from "react-router-dom"

export default class UpdateBudgetButton extends React.Component {
  render() {
    return (
        <div className="button-update">
            <Link to="/create"><button 
            className="myButton">Update Budget</button></Link>
        </div>
    );
  } 
}
