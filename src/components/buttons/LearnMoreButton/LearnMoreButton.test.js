import React from "react";
import ReactDOM from "react-dom";
import LearnMoreButton from "./LearnMoreButton";
import { BrowserRouter }from "react-router-dom";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <LearnMoreButton />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
