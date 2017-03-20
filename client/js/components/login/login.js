import React from 'react';
import {connect} from 'react-redux';
import {login, proccessUserEmailInput, proccessUserPasswordInput} from '../../actions/actions';
export class Login extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="login-container">
            <h1>App Name</h1>
            <h3>enticing description</h3>
            <form onSubmit={() => this.props.dispatch(login(this.props.userEmailInput, this.props.userPasswordInput))}>
              <label>Email:</label>
              <input type="text" placeholder="email" value={this.props.userEmailInput} onChange={(e) => this.props.dispatch(proccessUserEmailInput(e.target.value))}/>
              <label>Password:</label>
              <input type="text" placeholder="Password" value={this.props.userPasswordInput} onChange={(e) => this.props.dispatch(proccessUserPasswordInput(e.target.value))}/>
              <button type="submit">Login</button>
            </form>
          </div>
        )
    }
  }

const mapStateToProps = (state, props) => ({
  userEmailInput: state.userEmailInput,
  userPasswordInput: state.userPasswordInput
})

export default connect(mapStateToProps)(Login);
