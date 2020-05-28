import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./components/NavBar/NavBar";
import Footer from "./components/Footer/footer"
import Routes from "./Routes/Routes";
import App from "./App";
import "./index.css";



ReactDOM.render(
  <Router>
    <div className="App">
      <Navigation />
      <App />
      <Routes />
      <Footer/>
    </div>
  </Router>,
  document.getElementById("root")
);
