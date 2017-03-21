import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import Login from './components/login/login';
import Signup from './components/signup/signup'
import {BrowserRouter as Router, Route } from 'react-router-dom';

console.log(`Client running in ${process.env.NODE_ENV} mode`);

// <Route path="/" component={Signup}/>
const routes = (
  <Router>
    <div>
      <Route exact path="/" component={Login}/>

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
