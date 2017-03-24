import React from 'react';
import {connect} from 'react-redux';
import {userSignUp, proccessUserEmailInput, proccessUserNameInput, proccessUserPasswordInput} from '../../actions/signup-login'

export class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="signup-container">
            <div className="signup-page-container">
              <h1>App Name</h1>
              <h3>enticing description</h3>
            </div>
            <div className="signup-page-form">
              <form onSubmit={() => {
                   this.props.dispatch(userSignUp(this.props.userEmailInput, this.props.userPasswordInput, this.props.userNameInput)).then((response) => {
                     if (response.type === "SIGN_UP") {
                       this.props.history.push(`/business/dashboard/${this.props.currentConnection}`);
                     }
                   })
                 }}>
                <label>Name:</label>
                <input type="text" placeholder="Name" value={this.props.userNameInput} onChange={(e) => this.props.dispatch(proccessUserNameInput(e.target.value))}/>
                <label>Email:</label>
                <input type="text" placeholder="email" value={this.props.userEmailInput} onChange={(e) => this.props.dispatch(proccessUserEmailInput(e.target.value))}/>
                <label>Password:</label>
                <input type="text" placeholder="password" value={this.props.userPasswordInput} onChange={(e) => this.props.dispatch(proccessUserPasswordInput(e.target.value))}/>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )
    }
  }

  const mapStateToProps = (state, props) => ({
    userEmailInput: state.signupLogingReducer.emailInput,
    userPasswordInput: state.signupLogingReducer.passwordInput,
    userNameInput: state.signupLogingReducer.nameInput,
    currentConnection: state.signupLogingReducer.currentConnection
  })


export default connect(mapStateToProps)(Signup);
