import React from "react";
import config from "./config";
// import Routes from './Routes/Routes';
import ExpenseContext from "./contexts/ExpenseContext";
import BudgetPage from "./components/BudgetPage/budget-page";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      
      expenses: [],
    };
  }

  updateExpense = () => {
    this.setState({});
  };

  showExpense = () => {
    this.setState({});
  };

  handleAddExpense = (expense) => {
    fetch(`${config.API_ENDPOINT}/expense`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(expense),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((event) => Promise.reject(event));
        return res.json();
      })
      .then((res) => {
        this.getAllExpenses(res);
      })
      .catch((error) => {
        console.error({ error });
      });
console.log(this.state)
  };

  handleDeleteExpense = (expenseId) => {
    console.log('We will delete expense with id', expenseId)    
    fetch(`${config.API_ENDPOINT}/expenses/${expenseId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      mode: "cors",
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((event) => Promise.reject(event));
        }
        return res;
      })
      .then((res) => {
        this.getAllExpenses(res);
    
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  handleUpdateExpense = (expenseToUpdate) => {
    fetch(`${config.API_ENDPOINT}/expenses/${expenseToUpdate.id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(expenseToUpdate),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((event) => Promise.reject(event));
        }
        return res;
      })
      .then((res) => {
        this.getAllExpenses(res);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  getAllExpenses() {
    fetch(
            // 'https://git.heroku.com/fast-garden-40399.git'
            `${config.API_ENDPOINT}/expenses`)
          .then((res) => res.json()).then((data) => {
            console.log(data.expenses, "data")
            this.setState({
              expenses: data.expenses
            })
          }).catch((error) => {
            console.log(error, "error")
          });
  }
  componentDidMount() {
    this.getAllExpenses();
  }



  render() {
    const { expenses } = this.state;
    console.log(expenses, "line 106")
    const page = () => {
      if(expenses.length > 0) {
        return <ExpenseContext.Provider value={{
          expenses,
          handleDeleteExpense: this.handleDeleteExpense
          }} >
        <BudgetPage />
      </ExpenseContext.Provider>
      } else {
        return <h1>No context</h1>
      }
    }
    return (
      <div>
        { page() }
      </div>
      
    );
  }
}


//   function deleteExpense() {
//     return fetch(
//       // 'https://git.heroku.com/fast-garden-40399.git'
//       'http://localhost:8080/expenses')
//     .then((res) => res.json()).then((data) => {
//       console.log(data.expenses, "data")
//       return data.expenses
//     }).catch((error) => {
//       console.log(error, "error")
//     });
//   }

//   state = {

//   };

//   componentDidMount() {
//     const urls = [

//     ];

//     this.setState({})

//   }

//   handleDataFetch = () => {

//   }

//   //get data from form and pass to handleDataFetch
