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
          <h3>Easy Budget helps you achieve financial freedom. 
            <br /> By tracking and recording expenses we make it 
            <br />easier to reach your long-term financial goals.
        </h3>
            <GoToBudgetButton />
        </div> 
      </section>

      <section className="light-mode">
        <Overview />
      </section>
      <section className="dark-mode">
        <HowTo />
      </section>
      
      <section className="medium-mode">
        <ProgressSection />
        
      </section>
      <section id="hero-footer"></section>
    </div>
  );
}
}
