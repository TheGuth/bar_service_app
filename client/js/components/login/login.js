import React from 'react';
import {connect} from 'react-redux';

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
          <div className="login-container">
            <h1>App Name</h1>
            <h3>enticing description</h3>
            <form>
              <label>Email:</label>
              <input type="text" placeholder="email"/>
              <label>Password:</label>
              <input type="text" placeholder="Password"/>
              <button type="submit">Login</button>
            </form>
            <button type="submit">Signup</button>
          </div>
        )
    }
  }
export default connect()(Login);
