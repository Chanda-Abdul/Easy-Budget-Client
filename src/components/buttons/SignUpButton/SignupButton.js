import React from "react";
import Swal from 'sweetalert2'

export default class SignUpButton extends React.Component {
  // const Swal = require('sweetalert2')
  signup() {
    // alert(
      // `Thank you for your interest.  Easy Budget is currently in the testing phase.  Sign up below and we will let you know once Easy Budget is available to the public`
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    // );
  }
  render() {
    return (
      <div>
        <button className="myButton" onClick={this.signup}>
          Sign Up
        </button>
      </div>
    );
  }
}
