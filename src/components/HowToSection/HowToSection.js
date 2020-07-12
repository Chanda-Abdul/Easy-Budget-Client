import React from "react";
import goals from "../../images/goals.png";

export default class HowTo extends React.Component {
  render() {
    return (
      <div>
        <h2>How it works</h2> <img src={goals} alt="goals" className="image" height="250em" />
<div className="info container">
        

      <br />
        <br />
        <p>Track your expenses. The first step to gain control over your finances is to document your
        expenses and see exactly where your money is going. Easy Budget makes it easy to record all your expenses, so that you can see exactly where your money is going
        </p>
        </div>
      </div>
      
    );
  }
}
