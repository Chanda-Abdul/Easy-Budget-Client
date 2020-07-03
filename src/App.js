import React from "react";
import ExpenseContext from "./contexts/ExpenseContext";
import Routes from './routes/Routes'
import Navigation from "./components/NavBar/NavBar"
import Footer from './components/Footer/Footer'
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

    return (
      <ExpenseContext.Provider 
      value={this.state.expenses}
      >
      <Navigation />
        <Routes/>
        
        <Footer />
      </ExpenseContext.Provider>
    )
  }
}

