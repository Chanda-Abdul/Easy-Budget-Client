import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import HomePage from "../components/HomePage/HomePage";
import BudgetPage from "../components/BudgetPage/BudgetPage";
import DashboardPage from "../components/DashboardPage/DashboardPage";
import CreateExpensePage from "../components/CreateExpensePage/create-expense";
import LearningPage from "../components/pages/LearningPage/learning-page";
import NotFoundPage from "../components/pages/NotFound/NotFound"


export default class Routes extends Component {
  render() {
    return (
      
        <BrowserRouter>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/budget" component={BudgetPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/create" component={CreateExpensePage} />
          <Route exact path="/learn" component={LearningPage} />
          <Route component={NotFoundPage} />
        </BrowserRouter>
      
    );
  }
}
