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
    console.log("We will delete expense with id", expenseId);
    return fetch(`${config.API_ENDPOINT}/expenses/${expenseId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers":
          "Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin",
      },
    })
      .then((res) => {
        console.log(res, "response");
        return res;
      })
      .then((data) => {
        console.log(data, "data from delete");
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

  // updateExpense = (expenseId) => {
  //   //will work on this in the future
  //   console.log("We will update expense with id", expenseId);
  //   return fetch(`${config.API_ENDPOINT}/expenses/${expenseId}`, {
  //     method: "PATCH",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "Access-Control-Allow-Headers":
  //         "Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin",
  //     },
  //     body: JSON.stringify(),
  //   })
  //     .then((res) => {
  //       console.log(res, "response");
  //       return res;
  //     })
  //     .then((data) => {
  //       console.log(data, "data from delete");
  //     })
  //     .catch((error) => {
  //       console.error({ error });
  //     });
  // };

  

//   handleUpdateExpense = (expenseToUpdate) => {
//     //will work on this in the future
//     fetch(`${config.API_ENDPOINT}/expenses/${expenseToUpdate.id}`, {
//       method: "PATCH",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(expenseToUpdate),
//     })
//       .then((res) => {
//         if (!res.ok) {
//           return res.json().then((event) => Promise.reject(event));
//         }
//         return res;
//       })
//       .then((res) => {
//         this.getAllExpenses(res);
//       })
//       .catch((error) => {
//         console.error({ error });
//       });
//   };
}

export default ExpenseService;
