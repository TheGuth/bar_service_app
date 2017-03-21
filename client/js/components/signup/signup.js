import React from 'react';
import {connect} from 'react-redux';
import {userSignUp, proccessUserEmailInput, proccessUserNameInput, proccessUserPasswordInput} from '../../actions/actions'

export class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="signup-container">
            <h1>App Name</h1>
            <h3>enticing description</h3>
            <form onSubmit={() => this.props.dispatch(userSignUp(this.props.userNameInput, this.props.userEmailInput, this.props.userPasswordInput))}>
              <label>Name:</label>
              <input type="text" placeholder="Name" value={this.props.userNameInput} onChange={(e) => this.props.dispatch(proccessUserNameInput(e.target.value))}/>
              <label>Email:</label>
              <input type="text" placeholder="email" value={this.props.userEmailInput} onChange={(e) => this.props.dispatch(proccessUserEmailInput(e.target.value))}/>
              <label>Password:</label>
              <input type="text" placeholder="password" value={this.props.userPasswordInput} onChange={(e) => this.props.dispatch(proccessUserPasswordInput(e.target.value))}/>
              <button type="submit">Submit</button>
            </form>
          </div>
        )
    }
  }

  const mapStateToProps = (state, props) => ({
    userEmailInput: state.emailInput,
    userPasswordInput: state.passwordInput,
    userNameInput: state.nameInput
  })


export default connect()(Signup);
