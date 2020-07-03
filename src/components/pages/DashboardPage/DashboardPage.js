import React from "react";
import Visuals from "../../Visuals/Visuals";
import Stats from "../../Stats/Stats";
import UpdateBudgetButton from "../../buttons/UpdateBudgetButton/UpdateBudgetButton";
import LearnMoreButton from "../../buttons/LearnMoreButton/LearnMoreButton";

export default class DashBoardPage extends React.Component {
  render() {
    return (
      <div>
       <div className="banner-top"/>
          <h1>The Dashboard</h1>
  
        <section>
          <Stats />
        </section>
        <section>
          <Visuals />
        </section>
        <section>
          <UpdateBudgetButton />
          <LearnMoreButton />
        </section>
        <div className="banner-bottom"/>
      </div>
    );
  }
}
