import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Login from './components/login/login';
import Signup from './components/signup/signup';
import ClientDash from './components/client-dash/client-dashboard';
import BusinessDash from './components/business-dash/business-dashboard';
import {HashRouter as Router, Route, Link } from 'react-router-dom';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

const routes = (
  <Router>
    <div>
      <Route exact path="/" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/client/dashboard" component={ClientDash} />
    </div>
  </Router>
);

document.addEventListener('DOMContentLoaded', () =>
    ReactDOM.render(
        <Provider store={store}>
          {routes}
        </Provider>,
        document.getElementById('app')
    )
);
