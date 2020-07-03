import config from "../config"

class ExpenseService {
  getAllExpenses() {
    // this works
    console.log(config.API_ENDPOINT, "endpoint");
    return fetch(`${config.API_ENDPOINT}/expenses`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "data");
        return data.expenses
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }


  deleteExpense = (expenseId) => {
    console.log("We will delete expense with id", expenseId);
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

  updateExpense = () => {
    
  };

  showExpense = () => {
    
  };

  handleAddExpense = (data) => {
    fetch(`${config.API_ENDPOINT}/expense`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
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
}

export default ExpenseService
