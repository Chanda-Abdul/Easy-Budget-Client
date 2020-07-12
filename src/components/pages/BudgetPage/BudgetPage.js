import React from "react";
import LearnMoreButton from "../../buttons/LearnMoreButton/LearnMoreButton";
import UpdateBudgetButton from "../../buttons/UpdateBudgetButton/UpdateBudgetButton";
import BudgetTable from "../../BudgetTable/BudgetTable";
import ExpenseContext from "../../../contexts/ExpenseContext";

export default class BudgetPage extends React.Component {
  static contextType = ExpenseContext;

  render() {
    // const expenses = this.context;
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
              <form className="" onSubmit={(e) => this.handleSubmit(e)}>
                <fieldset name="budget-form">
                  <legend>An overview of your budget</legend>
                  <div className="input-form-group">
                    <label htmlFor="name">Total Monthly Income:</label>
                    <input
                      type="number"
                      className="input__control"
                      name="total-income"
                      id="total-income"
                      placeholder="$4,000"
                      onChange={(e) => this.updateIncome(e.target.value)}
                    />
                  </div>
                </fieldset>
              </form>
            </section>

            <section>
              <UpdateBudgetButton />
              <LearnMoreButton />
            </section>
            <div className="banner-bottom" />
          </div>
        )}
      </ExpenseContext.Consumer>
    );
  }
}