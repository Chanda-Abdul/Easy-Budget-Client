import React from "react";
import ReactDOM from "react-dom";
// import { library } from '@fortawesome/fontawesome-svg-core'
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
// import {
//   faPlus, faChevronLeft, faTrashAlt, faCheckDouble
// } from '@fortawesome/free-solid-svg-icons'

// library.add(faPlus, faChevronLeft, faTrashAlt, faCheckDouble)

ReactDOM.render(
  <BrowserRouter>
      {/* <Navigation /> */}
      <App />
      {/* <Footer/> */}
  </BrowserRouter>,
  document.getElementById("root")
);
