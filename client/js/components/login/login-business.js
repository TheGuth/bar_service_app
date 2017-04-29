import React from 'react';
import {connect} from 'react-redux';
import {userLogin, proccessUserEmailInput, proccessUserPasswordInput} from '../../actions/signup-login';
import {Link} from 'react-router-dom';

export class LoginBusiness extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

      const {userEmailInput} = this.props;

        return (
          <div className="login-container">
            <div className="login-page-header">
              <h1>Drunk Fast</h1>
            </div>
            <div className="login-page-form">
              <form onSubmit={(e) => {
                  e.preventDefault();
                  this.props.dispatch(userLogin(this.props.userEmailInput, this.props.userPasswordInput)).then((response) => {
                    if (response.type === "LOGIN") {
                      // window.location(`/business/dashboard/${this.props.currentConnection}`);
                      this.props.history.push(`/business/dashboard/${this.props.currentConnection}`);
                    }
                  });
                }}>
                <label>Email</label>
                <input type="email" placeholder="email" value={this.props.userEmailInput} onChange={(e) => this.props.dispatch(proccessUserEmailInput(e.target.value))}/>
                <label>Password</label>
                <input type="password" placeholder="Password" value={this.props.userPasswordInput} onChange={(e) => this.props.dispatch(proccessUserPasswordInput(e.target.value))}/>
                <button type="submit">Login</button>
              </form>
            </div>
            <div className="login-page-signup">
              <h3>Business Sign Up</h3>
              <div>
                <Link to="/signup/business"><button>Sign Up</button></Link>
              </div>
            </div>
          </div>
        )
    }
  }

const mapStateToProps = (state, props) => ({
  userEmailInput: state.signupLogingReducer.emailInput,
  userPasswordInput: state.signupLogingReducer.passwordInput,
  currentConnection: state.signupLogingReducer.currentConnection
})

export default connect(mapStateToProps)(LoginBusiness);
