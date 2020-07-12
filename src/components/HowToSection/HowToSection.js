import React from "react";
import goals from "../../images/goals.png";

export default class HowTo extends React.Component {
  render() {
    return (
      <div>
        <h1>How it works</h1> 
<div className="info container">
        

      <img src={goals} alt="goals" className="right" height="250em" />
        <br /><h4>Track your expenses. The first step to gain control over your finances is to document your
        expenses and see exactly where your money is going. Easy Budget makes it easy to record all your expenses, so that you can see exactly where your money is going</h4>
        </div>
      </div>
      
    );
  }
}
