import React from "react";
import LearnMoreButton from "../LearnMoreButton/learn-more-button";
import UpdateBudgetButton from "../UpdateBudgetButton/update-budget-button";
import BudgetTable from "../BudgetTable/budget-table"


function getAPI() {
  return fetch('http://localhost:8080/expenses')
  .then((res) => res.json()).then((data) => {
    console.log(data.expenses, "data")
    return data.expenses
  }).catch((error) => {
    console.log(error, "error")
  });
}



export default function BudgetPage(props) {
let budgetExpenses = getAPI();
  return (
    <div className="budget-page">
      <header className="banner">
        <h1>Your Budget</h1>
        <section>
          <h2>just imagine.</h2>
        </section>
      </header>
<section>
<BudgetTable expenses={budgetExpenses} />
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
        <form className="" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset name="expense-form">
            <legend>
              <h1>Recurring Expenses</h1>
              <h3>30% of your income</h3>
            </legend>

            <label htmlFor="rent-expense-input">Rent/Mortgage:</label>
            <input
              type="number"
              className="input__control"
              name="rent-expense"
              id="rent-expense"
              placeholder="$1,200"
              onChange={(e) => this.updateRent(e.target.value)}
            />
            <br />
            <label htmlFor="electric-expense-input">Electricity:</label>
            <input
              type="number"
              className="input__control"
              name="electric-expense"
              id="electric-expense"
              placeholder="$50"
              onChange={(e) => this.updateElectric(e.target.value)}
            />
            <br />
            <label htmlFor="gas-expense-input">Gas:</label>
            <input
              type="number"
              className="input__control"
              name="gas-expense"
              id="gas-expense"
              placeholder="$25"
              onChange={(e) => this.updateGas(e.target.value)}
            />
            <br />
            <label htmlFor="Phone-expense-input">Phone:</label>
            <input
              type="number"
              className="input__control"
              name="phone-expense"
              id="phone-expense"
              placeholder="$50"
              onChange={(e) => this.updatePhone(e.target.value)}
            />
            <br />
            <label htmlFor="internet-expense-input">Internet:</label>
            <input
              type="number"
              className="input__control"
              name="internet-expense"
              id="internet-expense"
              placeholder="$50"
              onChange={(e) => this.updateInternet(e.target.value)}
            />
            <br />
            <label htmlFor="water-expense-input">Water:</label>
            <input
              type="number"
              className="input__control"
              name="water-expense"
              id="water-expense"
              placeholder="$25"
              onChange={(e) => this.updateWater(e.target.value)}
            />
          </fieldset>
        </form>
      </section>

      <section>
        <form className="" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset name="savings-form">
            <legend>
              <h1>Savings</h1>
              <h3>at least 10% of your income</h3>
            </legend>
            <div className="input-form-group">
              <h4>
                <label htmlFor="name">Total Monthly Savings:</label>
                <input
                  type="number"
                  className="input__control"
                  name="total-savings"
                  id="total-savings"
                  placeholder="$400"
                  onChange={(e) => this.updateSavings(e.target.value)}
                />
              </h4>
            </div>
          </fieldset>
        </form>
      </section>

      <section>
        <form className="" onSubmit={(e) => this.handleSubmit(e)}>
          <fieldset name="expense-form">
            <legend>
              <h1> Discretionary Expenses</h1>
              <h3>what's left over a.k.a the "Fun Stuff"</h3>
            </legend>

            <h4>
              <label htmlFor="extra-expense-input">
                Total Discretionary Income:
              </label>
              <input
                type="number"
                className="input__control"
                name="discretionary-expense"
                id="discretionary-expense"
                placeholder="$2,400"
                onChange={(e) => this.updateExtra(e.target.value)}
              />
            </h4>

            <label htmlFor="transportation-expense-input">
              Transportation:
            </label>
            <input
              type="number"
              className="input__control"
              name="transportation-expense"
              id="transportation-expense"
              placeholder="$500"
              onChange={(e) => this.updateTransportation(e.target.value)}
            />
            <br />
            <label htmlFor="food-expense-input">Food:</label>
            <input
              type="number"
              className="input__control"
              name="food-expense"
              id="food-expense"
              placeholder="$500"
              onChange={(e) => this.updateFood(e.target.value)}
            />
            <br />
            <label htmlFor="shopping-expense-input">Shopping:</label>
            <input
              type="number"
              className="input__control"
              name="shopping-expense"
              id="shopping-expense"
              placeholder="$500"
              onChange={(e) => this.updateShopping(e.target.value)}
            />
            <br />
            <label htmlFor="travel-expense-input">Travel:</label>
            <input
              type="number"
              className="input__control"
              name="travel-expense"
              id="travel-expense"
              placeholder="$500"
              onChange={(e) => this.updateTravel(e.target.value)}
            />
            <br />
            <label htmlFor="home-expense-input">Home:</label>
            <input
              type="number"
              className="input__control"
              name="home-expense"
              id="home-expense"
              placeholder="$25"
              onChange={(e) => this.updateHome(e.target.value)}
            />
            <br />
            <label htmlFor="other-expense-input">Other:</label>
            <input
              type="number"
              className="input__control"
              name="other-expense"
              id="other-expense"
              placeholder="$25"
              onChange={(e) => this.updateOther(e.target.value)}
            />
            <br />
          </fieldset>
        </form>
      </section>
      <section>
        <UpdateBudgetButton />
        <LearnMoreButton />
      </section>
      <section></section>
    </div>
  );
}
