import React from 'react';
import NavBar from './components/NavBar/nav-bar';
import MainPage from './components/MainPage/main-page';
import { Switch, Route } from 'react-router-dom';

export default function App(props) {
  return (
    <div className="app">
      <Switch>
        <Route path="/" component={NavBar}/>
        <Route path="/" component={MainPage}/>
      </Switch>
    </div>
  );
}

