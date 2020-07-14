import config from "../config";

class ExpenseService {
  getAllExpenses() {
    // this is to retrieve all expenses from database
    return fetch(`${config.API_ENDPOINT}/expenses`)
      .then((res) => res.json())
      .then((data) => {
        return data.expenses;
      })
      .catch((error) => {
        console.log(error, "error");
      });
  }

  deleteExpense = (expenseId) => {
    //this is to delete expenses from database, in <budgetTable/>
    return fetch(`${config.API_ENDPOINT}/expenses/${expenseId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",

      },
    })
      .catch((error) => {
        console.error({ error });
      });
  };

handleAddExpense = (data) => {
   return fetch(`${config.API_ENDPOINT}/expenses`, {
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
         return this.getAllExpenses(res);
      })
      .catch((error) => {
        console.error({ error });
      });
  };
}

export default ExpenseService;
