import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";
import BudgetPage from "../components/BudgetPage/budget-page";
import DashboardPage from "../components/DashboardPage/dash-board";
import CreateExpensePage from "../components/CreateExpensePage/create-expense";
import LearningPage from "../components/LearningPage/learning-page";
import NotFoundPage from "../components/NotFound/not-found"


export default class Routes extends Component {
  render() {
    return (
      
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/budget" component={BudgetPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/create" component={CreateExpensePage} />
          <Route exact path="/learn" component={LearningPage} />
          <Route component={NotFoundPage} />
        </Switch>
      
    );
  }
}
