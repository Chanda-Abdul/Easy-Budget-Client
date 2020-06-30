import React from "react";
import LearnMoreButton from "../LearnMoreButton/learn-more-button";
import UpdateBudgetButton from "../UpdateBudgetButton/update-budget-button";
import BudgetTable from "../BudgetTable/budget-table";
import ExpenseContext from "../../contexts/ExpenseContext";

export default function BudgetPage() {
  //function for consumer

  return (
    <ExpenseContext.Consumer>
      {(value) => (
        <div className="budget-page">
          <section id="hero" />
          <header className="banner">
            <h1>Your Budget</h1>
            <section>
              <h2>just imagine.</h2>
            </section>
          </header>
          <section>
            <BudgetTable
              payload={value}
              // expenses={budgetExpenses}
            />
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
          <section></section>
        </div>
      )}
    </ExpenseContext.Consumer>
  );
}
