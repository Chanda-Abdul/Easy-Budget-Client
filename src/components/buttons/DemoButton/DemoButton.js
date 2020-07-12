import React from "react";
import { Link } from "react-router-dom";

export default class DemoButton extends React.Component {
  render() {
    return (
      <div className="button-demo">
        <Link to="/dashboard">
          <button className="myButton">Demo</button>
        </Link>
      </div>
    );
  }
}
