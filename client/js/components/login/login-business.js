import React from 'react';
import {connect} from 'react-redux';
import {BusinessUserLogin, proccessUserEmailInput, proccessUserPasswordInput} from '../../actions/signup-login';
import {Link} from 'react-router-dom';

export class LoginBusiness extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          email: '',
          password: '',
          error: false,
        }
    }

    displayError() {
      if (this.state.error) {
        return (
          <div className="error_message">
            <p>email or password was incorrect</p>
          </div>
        )
      }
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
                  this.props.dispatch(BusinessUserLogin(this.state.email, this.state.password)).then((response) => {
                    if (response.type === "LOGIN") {
                      // window.location(`/business/dashboard/${this.props.currentConnection}`);
                      this.props.history.push(`/business/dashboard/${this.props.currentConnection}`);
                    } else {
                      this.setState({error: true})
                    }
                  });
                }}>
                <label>Email</label>
                <input type="email" placeholder="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                <label>Password</label>
                <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                {this.displayError()}
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
  currentConnection: state.signupLogingReducer.currentConnection
})

export default connect(mapStateToProps)(LoginBusiness);
