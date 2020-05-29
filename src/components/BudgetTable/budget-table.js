import React from "react";
import "./budget-table.css";
import moment from "moment"



export default class BudgetTable extends React.Component {
  //console.log(props.expenses, "budget table props")
  //let expenses = await  props.expenses;
  constructor(props) {
    super(props);
    this.state = {
      expenses: []
    }
  }

  async componentDidMount() {
let newExpenses = await this.props.expenses;
this.setState({
  expenses: newExpenses
})
}
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              {/* Row 1 - Table Header*/}
              <th scope="col">Date</th>
              <th scope="col">Expense</th>
              <th scope="col">Amount</th>
              <th scope="col">Type</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            
              {/* Row 2 */}
              
              {
    this.state.expenses.map(expense => {
      return (
        <tr>
          <td>{moment(expense.date).format('MMMM D, YYYY')}</td>
        <td>{expense.name}</td>
        <td>{expense.amount}</td>
        <td>{expense.type}</td>
        <td>{expense.category}</td>
        </tr>
      )
      }) 
  }
            
      
          </tbody>
          {/* Table footer */}
          <tfoot>
          <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
          </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}
