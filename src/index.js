import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer"
import Routes from "./Routes/Routes";
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import "./index.css";
// import ReactDOM from 'react-dom'


ReactDOM.render(
  <BrowserRouter>
    <div className="App">
      <Navigation />
      <App />
      <Routes />
      <Footer/>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
