import React from 'react';
import NavBar from './components/NavBar/nav-bar';
import MainPage from './components/MainPage/main-page';
import BudgetPage from './components/BudgetPage/budget-page'
import DashboardPage from './components/DashboardPage/dash-board'
import Footer from './components/Footer/footer'
import { Switch, Route } from 'react-router-dom';

export default function App(props) {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={NavBar}/>     
      </Switch>
      <Switch>
        <Route exact path="/" component={MainPage}/>
      </Switch>
      <Switch>
        <Route exact path="/makebudget" component={BudgetPage}/>
      </Switch>
      <Switch>
        <Route exact path="/dashboard" component={DashboardPage}/>
      </Switch>
      <Switch>
        <Route path="/" component={Footer}/>
      </Switch>
    </div>
  );
}

