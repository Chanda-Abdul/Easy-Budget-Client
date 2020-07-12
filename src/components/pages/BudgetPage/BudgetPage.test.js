import React from "react";
import ReactDOM from "react-dom";
import BudgetPage from "./BudgetPage";
import { BrowserRouter } from "react-router-dom";
import ExpenseContext from "../../../contexts/ExpenseContext"

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ExpenseContext.Provider value={ [] }>
    <BrowserRouter>
      <BudgetPage />
    </BrowserRouter>
    </ExpenseContext.Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
