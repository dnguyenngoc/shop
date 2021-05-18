import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './index.css';
import Home from './screens/home.js'
import Header from './components/header/header.js'

const routes = [
  {
    path: '/',
    component: Home,
  }
];


ReactDOM.render(
  <Router forceRefresh={true}>
    <Header/>
     <Switch>
      {routes.map((route) => (
        <Route exact path={route.path} render={() => <route.component />} key={route.path} />
      ))}
    </Switch>
  </Router>,
  document.getElementById('root')
);

