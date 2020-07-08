import React from "react";

export default class CreateExpensePage extends React.Component {
  state = {
    expenseName: "",
    amount: "",
    category: "",
  };

  onInputChange = (e) => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  submitLogin = () => {
    alert(
      `Adding an expense named ${this.state.expenseName} in the amount of $
      ${this.state.amount} to be categorized as 
      ${this.state.category}`
    );
  };

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
                <label htmlFor="expenseName"> </label>
                New Expense Name:
                <input
                  placeholder="Another expense"
                  name="expenseName"
                  type="text"
                  value={this.state.expenseName}
                  className="input__control"
                  onChange={this.onInputChange}
                />
                Amount:
                <input
                  placeholder="$20"
                  name="amount"
                  type="currency"
                  className="input__control"
                  value={this.state.amount}
                  onChange={this.onInputChange}
                />
                <label htmlFor="expense-category">Category: </label>
                <select
                  // id="expense-category"
                  name="category"
                  onChange={this.onInputChange}
                >
                  <option value="recurring">Recurring</option>
                  <option value="savings">Savings</option>
                  <option value="discretionary">Discretionary</option>
                </select>
              </div>

              <button
                className="myButton"
                type="submit"
                onClick={this.submitLogin}
              >
                Add Expense
              </button>
            </fieldset>
          </form>
        </section>
        <div className="banner-bottom"></div>
      </div>
    );
  }
}
