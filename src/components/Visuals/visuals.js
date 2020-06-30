import React from "react";
import savings from "../../images/savings.png";

export default class Visuals extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="visual-box">
            <img src={savings} alt="savings" width="400px" />
            <br />
            Insert graph about your budget here
          </div>
          <div className="visual-box">
            <img
              src="https://blog.visual.ly/wp-content/uploads/2013/04/coxcomb.png"
              alt="#"
              width="400px"
            />
            <br />
            Insert graph about your budget here
          </div>
          <br />
          <div className="visual-box">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyhl02ShciZf7xdsZIOuQ9yOEuGIN4wmlBQ4pl9jGplP3kTJ6V&s"
              alt="#"
              width="400px"
            />
            <br />
            Insert graph about your budget here
          </div>
        </div>
      </div>
    );
  }
}
