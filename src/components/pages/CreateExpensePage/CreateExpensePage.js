import React from "react";
import ExpenseService from "../../../services/ExpenseService";
import ExpenseContext from "../../../contexts/ExpenseContext"
import GoToBudgetButton from '../../buttons/GoToBudgetButton/GoToBudgetButton'
import Swal from 'sweetalert2'

export default class CreateExpensePage extends React.Component {
  static contextType = ExpenseContext

  state = {
    expenseName: "",
    amount: "",
    type: 16,
    category: "Discretionary",
  };

  constructor(props) {
    super(props);
    this.expenseService = new ExpenseService();
  }

  onInputChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  expenseAlert() {
    Swal.fire({
      title: "Expense has been added!",
      icon: "success",
      button: "Aww yiss!",
      })
  }

  handleSubmit = (event, expenseId) => {
    event.preventDefault();
    const newExpenses = {
      name: this.state.expenseName,
      amount: this.state.amount,
      type_id: this.state.type,
      category: this.state.expenses,
    };
    this.expenseService
      .handleAddExpense(newExpenses)
      .then((expenses) => {
        this.context.setExpenses(expenses);
      })
      .catch((err) => {
        console.log(err, "error on createExpense");
      });
      // alert(this.expenseAlert)
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
                /><br />
                Amount:
                <input
                  placeholder="$20"
                  name="amount"
                  type="number"
                  className="input__control"
                  value={this.state.amount}
                  onChange={this.onInputChange}
                /> <br />
                <label htmlFor="expense-type"> Type: </label>
                <select
                  value={this.state.type}
                  defaultValue={this.state.type}
                  name="type"
                  onChange={this.onInputChange}
                  required
                ><br />
                  <option value="16">Other</option>
                  <option value="1">Rent</option>
                  <option value="2">Electricity</option>
                  <option value="3">Gas</option>
                  <option value="4">Phone</option>
                  <option value="5">Internet</option>
                  <option value="6">Water</option>
                  <option value="7">Savings</option>
                  <option value="8">Investments</option>
                  <option value="9">Mortgage</option>
                  <option value="10">Transportation</option>
                  <option value="11">Restauraunts</option>
                  <option value="12">Groceries</option>
                  <option value="13">Travel</option>
                  <option value="14">Shopping</option>
                  <option value="15">Home</option>
                  <option value="17">Charity</option>
                  <option value="18">Beauty</option>
                  <option value="19">Entertainment</option>
                  <option value="20">Gifts</option>
                  <option value="21">Insurance</option>
                  <option value="22">Debt Repayment</option>
                </select><br />
                <label htmlFor="expense-category"> Category: </label>
                <select
                  value={this.state.category}
                  defaultValue={this.state.category}
                  name="category"
                  onChange={this.onInputChange}
                  required
                >
                  <option value="Recurring">Recurring</option>
                  <option value="Savings">Savings</option>
                  <option value="Discretionary">Discretionary</option>
                </select>
              </div>

              <button className="myButton" type="submit" onClick={this.expenseAlert}>
                Add Expense
              </button>
            </fieldset>
          </form>
          <br />
          <GoToBudgetButton />
        </section>
        <div className="banner-bottom"></div>
      </div>
    );
  }
}
