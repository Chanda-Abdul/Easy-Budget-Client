import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import BudgetTable from "./BudgetTable";
import ExpenseContext from '../../contexts/ExpenseContext'

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ExpenseContext.Provider value={[]}>
      <BrowserRouter>
        <BudgetTable />
      </BrowserRouter>
    </ExpenseContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
