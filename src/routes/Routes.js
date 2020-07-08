import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage/HomePage";
import BudgetPage from "../components/pages/BudgetPage/BudgetPage";
import DashboardPage from "../components/pages/DashboardPage/DashboardPage";
import CreateExpensePage from "../components/pages/CreateExpensePage/CreateExpensePage";
import LearningPage from "../components/pages/LearningPage/LearningPage";
import NotFoundPage from "../components/pages/NotFound/NotFound";

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/budget" component={BudgetPage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/create" component={CreateExpensePage} />
        <Route exact path="/learn" component={LearningPage} />
        <Route exact path="#" component={NotFoundPage} />
      </Switch>
    );
  }
}