import React from "react";
import goals from "../../images/goals.png";

export default class HowTo extends React.Component {
  render() {
    return (
      <div className="info textbox">
        <h2>How it works</h2>
        
        <img src={goals} alt="#" className="right" height="250em" />
        <h3>Track your expenses</h3>
        <br /> The first step to gain control over your finaces is to see
        exactly where your money is going. Easy Budget makes it easy to record all your expenses, so that you can see exactly where your money is going
      </div>
    );
  }
}
