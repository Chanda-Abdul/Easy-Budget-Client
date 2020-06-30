import React from "react";
import Overview from "../Overview/overview";
import HowTo from "../HowToSection/how-to-section";
import ProgressSection from "../ProgressSection/progress-section";
import GoToBudgetButton from "../GoToBudgetButton/go-to-budget-button";
import "./HomePage.css"
import savings from "../../images/savings.png"





export default function HomePage(props) {
 
  return (
    <div className="home-page">
      <section id="hero">
      <div className="header">
        <h1>Make budgeting easy</h1>
        </div> 
      </section>
      {/* <section className="medium-mode">
        
      </section> */}
      <section className="medium-mode">
        {" "}
        <p>
          <h2>Acheive Financial Freedom</h2>
          <h3>h3</h3>
          <h4>h4</h4>
        </p>
        
      </section>

      <section className="light-mode">
        <Overview />
      </section>
      <section className="dark-mode">
        <HowTo />
      </section>
      
      <section className="medium-mode">
        <ProgressSection />
        <GoToBudgetButton />
      </section>
      <section id="hero-footer"></section>
    </div>
  );
}
