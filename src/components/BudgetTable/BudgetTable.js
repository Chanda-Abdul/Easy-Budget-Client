import React from "react";
import "./budget-table.css";
// import moment from "moment"
import ExpenseContext from '../../contexts/ExpenseContext'



export default class BudgetTable extends React.Component {
  static contextType = ExpenseContext;
  render() {
    const expenses = this.context
    console.log(this.context, "budgettable")
    console.log( "value")
  
    return (
      <ExpenseContext.Consumer>
        
      {(value) => (
       
  <div>budget table
          {console.log(expenses, "insidetable")}
        </div>
      
      )}
      </ExpenseContext.Consumer>
      );
    }

  // renderTable() {
  //   return (
  //     <div>
  //       <table>
  //         <thead>
  //           <tr>
  //             {/* Row 1 - Table Header*/}
  //             <th scope="col">Date</th>
  //             <th scope="col">Expense</th>
  //             <th scope="col">Amount</th>
  //             <th scope="col">Type</th>
  //             <th scope="col">Category</th>
  //             <th scope="col"> </th>
  //           </tr>
  //         </thead>
  //         <tbody> 
  //             {/* Row 2 */}
              
  //             {
  //             this.state.
  //             expenses.map(expense => {
  //     return (
  //       <tr>
  //         <td>{ moment(expense.date).format('MMMM D, YYYY') }</td>
  //       <td>{expense.name}</td>
  //       <td>{expense.amount}</td>
  //       <td>{expense.type}</td>
  //       <td>{expense.category}</td>
  //       <td><button onClick={() => this.state.handleDelete(expense.id)} className="myButton">Delete</button></td>
  //       </tr>
  //     )
  //     }) 
  // }
  //           </tbody>
  //         {/* Table footer */ }
  //         {/* <tfoot>
  //         <tr>
  //             <td></td>
  //             <td></td>
  //             <td></td>
  //             <td></td>
  //             <td></td>
  //         </tr>
  //         </tfoot> */}
  //       </table>
  //     </div>
  //   );
  // }
  
  //let expenses = await  props.expenses;
  // constructor(props) {
  //   super(props);
  //   console.log(this.props.payload, "payload")
  //   this.state = {
  //     expenses: [],
  //     handleDelete: () => {console.log('No delete')}
  //   }
  // }



// componentDidMount() {
//   if(this.props.payload) {
//     let newExpenses = this.props.payload.expenses;
//     let handleDelete = this.props.payload.handleDeleteExpense; 
//     this.setState({
//       expenses: newExpenses,
//       handleDelete
//     })
//   } 
 
// }


}
