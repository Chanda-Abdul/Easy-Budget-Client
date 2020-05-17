import React from "react";

export default class SignUpButton extends React.Component {
  signup() {
    alert(
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    );
  }
  render() {
    return (
      <div>
        <button onClick={this.signup}>Sign Up</button>
      </div>
    );
  }
}
