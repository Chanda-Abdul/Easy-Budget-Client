import React from "react";
// import Routes from './Routes/Routes';
import ExpenseContext from "./contexts/ExpenseContext";
import BudgetPage from "./components/BudgetPage/BudgetPage";
import ExpenseService from "./api/fast-garden"

export default class App extends React.Component {
  constructor(props) {
    super(props) 
    this.expenseService = new ExpenseService()
  }
  state = {
    expenses: null
  }

  async componentDidMount() {
    const expenses = await this.expenseService.getAllExpenses()
    this.setState({
      expenses,
    });
  }

  render() {
    const { expenses } = this.state;
   
    const page = () => {
      if (expenses && expenses.length > 0) {
        return (
          <ExpenseContext.Provider
            value={{
              expenses,
              handleDeleteExpense: this.handleDeleteExpense,
            }}
          >
            <BudgetPage expenses={expenses}/>
          </ExpenseContext.Provider>
        );
      } else {
        return <h1>No context</h1>;
      }
    };
    return <div>{page()}</div>;
  }
}

