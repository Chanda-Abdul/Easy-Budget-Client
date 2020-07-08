import React from "react";
import ExpenseService from "../../../services/ExpenseService";

export default class CreateExpensePage extends React.Component {
  state = {
    expenseName: "",
    amount: "",
    category: "recurring",
  };

  constructor(props) {
    super(props);
    this.expenseService = new ExpenseService();
  }

  onInputChange = (e) => {
    e.preventDefault();

    // alert(e.target.value);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (event, expenseId) => {
    event.preventDefault();
    const newExpenses = {
      expenseName: this.state.expenseName,
      amount: this.state.amount,
      category: this.state.expenses,
    };
    this.expenseService
      .handleAddExpense()
      .then(() => {
        const createdExpenses = newExpenses.filter(
          (expense) => expense.id !== expenseId
        );
        this.setState({ expenses: createdExpenses });
      })
      .catch((err) => {
        console.log(err, "error on createExpense");
      });
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
                  type="number"
                  className="input__control"
                  value={this.state.amount}
                  onChange={this.onInputChange}
                />
                <label htmlFor="expense-category">Category: </label>
                <select
                  // id="expense-category"
                  value={this.state.category}
                  defaultValue={this.state.category}
                  name="category"
                  onChange={this.onInputChange}
                  required
                >
                  <option value="recurring">Recurring</option>
                  <option value="savings">Savings</option>
                  <option value="discretionary">Discretionary</option>
                </select>
              </div>

              <button className="myButton" type="submit">
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
