import React from "react";
import ReactDOM from "react-dom";
import UpdateBudgetButton from "./UpdateBudgetButton";
import { BrowserRouter } from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <UpdateBudgetButton />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
