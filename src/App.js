import React from "react";
import ExpenseContext from "./contexts/ExpenseContext";
import Routes from "./routes/Routes";
import Navigation from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import ExpenseService from "./services/ExpenseService";

export default class App extends React.Component {
  static contextType = ExpenseContext
  
  constructor(props) {
    super(props);
    this.expenseService = new ExpenseService();
  }
  state = {
    expenses: [],
  };

  async componentDidMount() {
    const expenses = await this.expenseService.getAllExpenses();
    this.setState({
      expenses,
    });
  }
  setExpenses = (expenses) => {
    this.setState({ expenses: expenses });
  };

  render() {
    const value = {
      expenses: this.state.expenses,
      setExpenses: this.setExpenses,
    };

    return (
      <ExpenseContext.Provider value={value}>
        <Navigation />
        <Routes />
        <Footer />
      </ExpenseContext.Provider>
    );
  }
}