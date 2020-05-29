import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer"
import Routes from "./Routes/Routes";
import App from "./App";
import "./index.css";
import history from "./history";
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter history={history}>
    <div className="App">
      <Navigation />
      <App />
      <Routes />
      <Footer/>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
