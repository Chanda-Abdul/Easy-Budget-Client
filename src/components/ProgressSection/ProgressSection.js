import React from "react";
import progress from "../../images/marathon.png"

export default class ProgressSection extends React.Component {
  render() 
  {
    return (
      <div>
        <h2>Visible Progress</h2>
        <img
        src={progress}
        alt="#"
        className="image"
        height="250em"/> 
         <div className="info container">
      <br /> 
       <p>Monitor your progress. 
         Stay on track and monitor your expenses with 
         customized charts created directly from your own expenses. 
         Once you can see where you money is going you can decide where to cut back 
         in order toso that you can acheive your financial goals
         </p> 
    </div>
      </div>
   
  )
}
}
