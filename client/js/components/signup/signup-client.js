import React from 'react';
import {connect} from 'react-redux';

export class SignupClient extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          name: '',
          email: '',
          password: '',
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
              <form>
                <label>Name:</label>
                <input type="text" placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
                <label>Email:</label>
                <input type="email" placeholder="email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
                <label>Password:</label>
                <input type="password" placeholder="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )
    }
  }

  const mapStateToProps = (state, props) => ({

  })


export default connect(mapStateToProps)(SignupClient);
