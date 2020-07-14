import React from "react";
import UpdateBudgetButton from "../../buttons/UpdateBudgetButton/UpdateBudgetButton";
import BudgetTable from "../../BudgetTable/BudgetTable";
import ExpenseContext from "../../../contexts/ExpenseContext";

export default class BudgetPage extends React.Component {
  static contextType = ExpenseContext;

  render() {
    return (
      <ExpenseContext.Consumer>
        {(value) => (
          <div className="budget-page">
            <div className="banner-top"></div>

            <h1>Your Budget</h1>

            <h2>Review your expenses, and decide where you can cut back</h2>
            <section>
              <BudgetTable value={value} />
            </section>
            <section>
              <UpdateBudgetButton />
            </section>
            <div className="banner-bottom" />
          </div>
        )}
      </ExpenseContext.Consumer>
    );
  }
}