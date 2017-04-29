import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';
import {HashRouter as Router, Route, Link } from 'react-router-dom';

// ROUTES
import LoginBusiness from './components/login/login-business';
import LoginClient from './components/login/login-client.js';
import SignupBusiness from './components/signup/signup-business';
import SignupClient from './components/signup/signup-client';
import ClientDash from './components/client-dash/client-dashboard';
import BusinessDash from './components/business-dash/business-dashboard';
import LandingPage from './components/landing-page/landing-page';
import RequireAuth from './components/auth/require_auth';
import ClientLandingPage from './components/landing-page/client-landing-page';


console.log(`Client running in ${process.env.NODE_ENV} mode`);

const routes = (
  <Router>
    <div>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login/business" component={LoginBusiness} />
      <Route exact path="/signup/business" component={SignupBusiness} />
      <Route exact path="/signup/client" component={SignupClient} />
      <Route exact path="/client/dashboard" component={ClientDash} />
      <Route exact path="/business/dashboard/:id" component={RequireAuth(BusinessDash)} />
      <Route exact path="/login/client" component={LoginClient} />
      <Route exact path="/client/landingPage" component={ClientLandingPage} />
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

// 58cffedf015af4d521e640bc james's test business id:
