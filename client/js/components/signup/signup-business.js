import React from 'react';
import {connect} from 'react-redux';
import {BusinessUserSignUp, proccessUserEmailInput, proccessUserNameInput, proccessUserPasswordInput} from '../../actions/signup-login'

export class SignupBusiness extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          businessName: '',
          email: '',
          password: '',
          error: false,
        }
    }

    displayError() {
      if (this.state.error) {
        return (
          <div className="error_message">
            <p>email already taken, or missing business name, email, or password</p>
          </div>
        )
      }
    }

    render() {
        return (
          <div className="signup-container">
            <div className="signup-page-container">
              <h1>Drunk Fast</h1>
              <h3>Sign Up</h3>
            </div>
            <div className="signup-page-form">
              <form onSubmit={(e) => {
                  e.preventDefault();
                   this.props.dispatch(BusinessUserSignUp(this.state.email, this.state.password, this.state.businessName)).then((response) => {
                     if (response.type === "SIGN_UP") {
                       this.setState({error: false})
                       this.props.history.push(`/business/dashboard/${this.props.currentConnection}`);
                     } else {
                       this.setState({error: true})
                     }
                   })
                 }}>
                <label>Name:</label>
                <input type="text" placeholder="Name" value={this.state.businessName} onChange={(e) => this.setState({businessName: e.target.value})}/>
                <label>Email:</label>
                <input type="email" placeholder="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                <label>Password:</label>
                <input type="password" placeholder="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                {this.displayError()}
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )
    }
  }

  const mapStateToProps = (state, props) => ({
    currentConnection: state.signupLogingReducer.currentConnection
  })

export default connect(mapStateToProps)(SignupBusiness);
