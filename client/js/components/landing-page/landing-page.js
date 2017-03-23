import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../actions/actions'

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="landing-page-container">
          <div className="landing-page-login">
            <Link to="/login"><button>Log In</button></Link>
          </div>
          <div className="landing-page-title">
            <h1>Bar Service App</h1>
          </div>
          <div className="landing-page-connect">
            <h2>Connect to a Business!</h2>
            <input type="text" placeholder="Unique ID:" value={this.props.userIdInput} onChange={(e) => this.props.dispatch(actions.proccessUserIdInput(e.target.value))}/>
            <Link to={{pathname: '/client/dashboard', params: {id: this.props.userIdInput}} }><button className="btn btn-primary btn-lg btn-block">Connect</button></Link>
          </div>
          <div className="landing-page-signup">
            <h3>Business Sign Up</h3>
            <div>
              <Link to="/signup"><button>Sign Up</button></Link>
            </div>
          </div>
        </div>
      )}
  }

  const mapStateToProps = (state, props) => ({
    userIdInput: state.idInput
  })

export default connect(mapStateToProps)(LandingPage);
