import React from "react";
import Overview from "../../Overview/Overview";
import HowTo from "../../HowToSection/HowToSection";
import ProgressSection from "../../ProgressSection/ProgressSection";
import GoToBudgetButton from "../../buttons/GoToBudgetButton/GoToBudgetButton";
import "./HomePage.css"

export default class HomePage extends React.Component {
 render() 
  {
    return (
    <div className="home-page">
      <section id="hero">
      <div className="header">
        <h1>Make budgeting easy</h1>
        </div> 
      </section>
      <section className="medium-mode">
        {" "}
        <p>
          <h2>Acheive Financial Freedom</h2>
          <h3>Stuff</h3>
          <h4>more stuff</h4>
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
}
