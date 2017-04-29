import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export class LoginClient extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          email: '',
          password: '',
        }
    }

    render() {
      return (
        <div className="login-container">
          <div className="login-page-header">
            <h1>Drunk Fast</h1>
          </div>
          <div className="login-page-form">
            <form>
              <label>Email</label>
              <input type="email" placeholder="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} />
              <label>Password</label>
              <input type="password" placeholder="Password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
              <button type="submit">Login</button>
            </form>
          </div>
          <div className="login-page-signup">
            <h3>Not Registered? Sign Up!</h3>
            <div>
              <Link to="/signup/client"><button>Sign Up</button></Link>
            </div>
          </div>
        </div>
      )
    }
  }

  const mapStateToProps = (state, props) => ({
    userIdInput: state.signupLogingReducer.idInput
  })

export default connect(mapStateToProps)(LoginClient);
