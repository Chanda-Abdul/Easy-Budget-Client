import React from "react";
import Visuals from "../../Visuals/Visuals";
import Stats from "../../Stats/stats";
import UpdateBudgetButton from "../../buttons/UpdateBudgetButton/UpdateBudgetButton";
import LearnMoreButton from "../../buttons/LearnMoreButton/LearnMoreButton";

export default class DashBoardPage extends React.Component {
  render() {
    return (
      <div>
        <section>
          <h1>The Dashboard</h1>
        </section>
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
        <section></section>
      </div>
    );
  }
}
