import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import HomePage from "../components/HomePage/HomePage";
import BudgetPage from "../components/BudgetPage/budget-page";
import DashboardPage from "../components/DashboardPage/dash-board";
import UpdatePage from "../components/UpdatePage/update-page";
import EducationPage from "../components/EducationPage/education-page";

import history from "../history";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/makebudget" component={BudgetPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path="/update" component={UpdatePage} />
          <Route exact path="/education" component={EducationPage} />
        </Switch>
      </Router>
    );
  }
}
