import React from "react";
import invest from "../../images/invest.png";

export default function Overview(props) {
  return (
    <div className=" ">
      <h1>An entirely better way to budget</h1>
      <h4>
        Easy budget helps you make progress towards your financial goals, one
        dollar at a time. <br />Every time you spend your money you make a decision. 
        Is what I'm buying worth the cost? <br />
        Making the right decisions with money can be difficult. Sometimes it is a lot easier to spend your money than it is to make it. <br />
        <br />
        <img
          src={invest}
          alt="investor"
          className="image"
          height="250em"
          width=""
        />
        <br />One way to help us spend our money wisely is by using a budgeting tool like Easy Budget
      </h4>
    </div>
  );
}
