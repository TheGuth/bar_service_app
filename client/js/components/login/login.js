import React from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/actions';
export class Login extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
          <div className="login-container">
            <h1>App Name</h1>
            <h3>enticing description</h3>
            <form onSubmit={() => this.props.dispactch(login(props.userEmailInput, props.userPasswordInput))}>
              <label>Email:</label>
              <input type="text" placeholder="email" onChange={(e) => props.dispatch(processUserEmailInput(e.target.value))}/>
              <label>Password:</label>
              <input type="text" placeholder="Password" onChange={(e) => props.dispatch(processUserPasswordInput(e.target.value))}/>
              <button type="submit">Login</button>
            </form>
          </div>
        )
    }
  }
export default connect()(Login);
