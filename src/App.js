import React from "react";
import config from './config';
// import Routes from './Routes'


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      //review this
      expenses: [],
      changed: false
    }
  }

  updateExpense = () => {
    this.setState({
      changed: false
    })
  }

  showExpense = () => {
    this.setState({
      changed: true
    })
  }
  validateExpenseChange() {
    if(this.state.changed) {
      return "Expense was updated"
    }
  }

  handleAddExpense = expense => {
    fetch(`${config.API_ENDPOINT}/expense`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(expense)
    })
    .then(res => {
      if (!res.ok)
      return res.json().then(event => Promise.reject(event))
      return res.json()
    })
    .then((res) => {
      this.getAllExpenses(res);
    })
    .catch(error => {
      console.error({ error })
    })
  }

  handleDeleteExpense = expense => {
    fetch(`${config.API_ENDPOINT}/expenses/${expense.id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(event => Promise.reject(event))
      }
      return res
    })
    .then((res) => {
      this.getAllExpenses(res);
    })
    .catch(error => {
      console.error({ error })
    })
  }

  handleUpdateExpense = expenseToUpdate => {
    fetch(`${config.API_ENDPOINT}/expenses/${expenseToUpdate.id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(expenseToUpdate)
    })
    .then(res => {
      if(!res.ok) {
        return res.json().then(event => Promise.reject(event))
      }
      return res
    })
    .then((res) => {
      this.getAllExpenses(res)
    }).catch(error => {
      console.error({ error })
    })
  }
 
getAllExpenses() {
  Promise.all([
    fetch(`${config.API_ENDPOINT}/expenses`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
  ])
  .then(([expenseRes]) => {
    if(!expenseRes.ok) 
    return expenseRes.json().then(e => Promise.rejects(e));
    return Promise.all([expenseRes.json()]);
  })
  .then(([expense]) => {
    this.setState({ expense })
  })
  .catch(error => {
    console.error({ error })
  })
}
  componentDidMount() {
    this.getAllExpenses();
  }

  render() {
    const successMessage = this.validateExpenseChange();
    const contextValue = {
      expenses: this.state.expenses,
      addExpense: this.handleAddExpense,
      updateExpense: this.handleUpdateExpense,
      deleteExpense: this.handleDeleteExpense,
      changeMessage: this.changeMessage,
      showMessage: this.showMessage
    }
    return (
      <div>

      </div>
      // <ApiContext.Provider value={contextValue}>
      //   /* Routes */
        
      // /* </ApiContext.Provider> */
    )
  }
}


//  function getAPI() {
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

//   let budgetExpenses = getAPI();


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


 