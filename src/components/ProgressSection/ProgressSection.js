import React from "react";
import progress from "../../images/marathon.png"

export default class ProgressSection extends React.Component {
  render() 
  {
    return (
      <div>
        <h1>Visible Progress</h1>
         <div className="info container">
      <br /> <img
        src={progress}
        alt="#"
        className="left"
        height="250em"/> 
       <h4>Monitor your progress. 
         Stay on track and monitor your expenses with 
         customized charts created directly from your own expenses. 
         Once you can see where you money is going you can decide where to cut back 
         in order toso that you can acheive your financial goals</h4> 
    </div>
      </div>
   
  )
}
}
