import React from "react";
import Overview from "../Overview/overview";
import HowTo from "../HowToSection/how-to-section";
import ProgressSection from "../ProgressSection/progress-section";
import GoToBudgetButton from "../GoToBudgetButton/go-to-budget-button";





export default function HomePage(props) {
 
  return (
    <div className="home-page">
      <section id="hero"></section>
      <section>
        <h1>Make budgeting easy</h1>
      </section>
      <section>
        {" "}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <GoToBudgetButton />
      </section>

      <section>
        <Overview />
      </section>
      <section>
        <HowTo />
      </section>
      <section>
        <ProgressSection />
        <GoToBudgetButton />
      </section>
      <section id="hero"></section>
    </div>
  );
}
