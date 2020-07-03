import React from "react";

export default class CreateExpensePage extends React.Component {
  render() {
    return (
      <div>
        <div className="banner-top"></div>
        <h1>Add an Expense</h1>

        <section>
          <form className="" onSubmit={(e) => this.handleSubmit(e)}>
            <fieldset name="budget-form">
              <legend>Add a New Expense:</legend>
              <h3>
                Just enter the name, dollar amount, and category of the new
                expense to add it to your budget
              </h3>
              <div className="input-form-group">
                <label htmlFor="name"> </label>
                
                Name: 
                <input
                  type="text"
                  className="input__control"
                  name="total-income"
                  id="total-income"
                  placeholder="Another expense"
                  onChange={(e) => this.updateIncome(e.target.value)}
                />
                Amount:{" "}
                <input
                  type="currency"
                  className="input__control"
                  name="total-income"
                  id="total-income"
                  placeholder="$4000"
                  onChange={(e) => this.updateIncome(e.target.value)}
                />
                <label htmlFor="expense-category">Category: </label>
                <select id="expense-category">
                  <option value="recurring">Recurring</option>
                  <option value="savings">Savings</option>
                  <option value="discretionary">Discretionary</option>
                </select>
              </div>

              <button className="myButton">Add Expense</button>
            </fieldset>
          </form>
        </section>
        <div className="banner-bottom"></div>
      </div>
    );
  }
}
