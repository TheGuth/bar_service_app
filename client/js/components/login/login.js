import React from 'react';
import {connect} from 'react-redux';
import {userLogin, proccessUserEmailInput, proccessUserPasswordInput} from '../../actions/actions';
import {Link} from 'react-router-dom';

export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

      const {userEmailInput} = this.props;

        return (
          <div className="login-container">
            <div className="login-page-header">
              <h1>App Name</h1>
              <h3>enticing description</h3>
            </div>
            <div className="login-page-form">
              <form onSubmit={() => {
                  this.props.dispatch(userLogin(this.props.userEmailInput, this.props.userPasswordInput)).then((response) => {
                    if (response.type === "LOGIN") {
                      this.props.history.push(`/business/dashboard/${this.props.currentConnection}`);
                    }
                  });
                }}>
                <label>Email</label>
                <input type="text" placeholder="email" value={this.props.userEmailInput} onChange={(e) => this.props.dispatch(proccessUserEmailInput(e.target.value))}/>
                <label>Password</label>
                <input type="text" placeholder="Password" value={this.props.userPasswordInput} onChange={(e) => this.props.dispatch(proccessUserPasswordInput(e.target.value))}/>
                <button type="submit">Login</button>
              </form>
            </div>
            <div className="login-page-signup">
              <h3>Business Sign Up</h3>
              <div>
                <Link to="/signup"><button>Sign Up</button></Link>
              </div>
            </div>
          </div>
        )
    }
  }

const mapStateToProps = (state, props) => ({
  userEmailInput: state.emailInput,
  userPasswordInput: state.passwordInput,
  currentConnection: state.currentConnection
})

export default connect(mapStateToProps)(Login);
