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
          <div className="d-flex flex-column align-items-end">
            <Link to="/login"><button className="landing-page-login btn btn-primary btn-block">Log In</button></Link>
          </div>
          <div className="d-flex flex-column align-items-center landing-page-title">
            <h1>Bar Service App</h1>
          </div>
          <div className="d-flex flex-column align-items-center landing-page-connect">
            <h2>Connect to a Business!</h2>
            <input type="text" placeholder="Unique ID:" className="landing-page-connect-input" value={this.props.userIdInput} onChange={(e) => this.props.dispatch(actions.proccessUserIdInput(e.target.value))}/>
            <Link to={{pathname: '/client/dashboard', params: {id: this.props.userIdInput}} }><button className="btn btn-primary btn-lg btn-block">Connect</button></Link>
          </div>
          <div className="d-flex flex-column align-items-center landing-page-signup">
            <h3>Business Sign Up</h3>
            <div>
              <Link to="/signup"><button className="btn btn-primary btn-lg btn-block">Sign Up</button></Link>
            </div>
          </div>
        </div>
      )}
  }

  const mapStateToProps = (state, props) => ({
    userIdInput: state.idInput
  })

export default connect(mapStateToProps)(LandingPage);
