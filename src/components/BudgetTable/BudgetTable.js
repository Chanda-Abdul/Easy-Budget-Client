import React from "react";
import "./budget-table.css";
import moment from "moment";
import ExpenseContext from "../../contexts/ExpenseContext";
import ExpenseService from "../../services/ExpenseService";

export default class BudgetTable extends React.Component {
  static contextType = ExpenseContext;

  constructor(props) {
    super(props);
    this.expenseService = new ExpenseService();
  }

  state = { expenses: null };

  componentDidMount() {
    const { expenses } = this.context;
    this.setState({ expenses });
  }

  handleDelete(event, expenseId) {
    event.preventDefault()
    const oldExpenses = this.state.expenses;
    this.expenseService.deleteExpense(expenseId)
    .then(() => {
      const updatedExpenses = oldExpenses.filter(
        (expense) => expense.id !== expenseId
      );
      this.setState({ expenses: updatedExpenses });
    }).catch((err) => {
      console.log(err, "error on deleteExpense")
    })
  }

  renderTable() {
    const { expenses } = this.state;
    if (expenses) {
      return expenses.map((expense) => {
        return (
          <tr>
            <td>{moment(expense.date).format("MMMM D")}</td>
            <td>{expense.name}</td>
            <td>{expense.amount}</td>
            <td 
            // className="invisible"
            >{expense.type}</td>
            <td
            //  className="invisible"
             >{expense.category}</td>
            <td>
              <button
                onClick={(event) => this.handleDelete(event, expense.id)}
                className="myButton"
              >
                Delete
              </button>
            </td>
          </tr>
        );
      });
    } else {
      return (
        <tr>
          <td>No expense found</td>
        </tr>
      );
    }
  }

  render() {
    return (
      <ExpenseContext.Consumer>
        {(value) => (
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  {/* Row 1 - Table Header*/}
                  <th scope="col" >Date</th>
                  <th scope="col">Expense</th>
                  <th scope="col">Amount</th>
                  <th scope="col" 
                  // className="invisible"
                  >Type</th>
                  <th scope="col" 
                  // className="invisible"
                  >Category</th>
                  <th scope="col"> </th>
                </tr>
              </thead>
              <tbody>
                {/* Row 2 */}
                {this.renderTable()}
              </tbody>
              {/* Table footer */}
              {/* <tfoot>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tfoot> */}
            </table>
          </div>
        )}
      </ExpenseContext.Consumer>
    );
  }

}
