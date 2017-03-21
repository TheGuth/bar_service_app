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
          <Link to="/login"><button>Log In</button></Link>
          <h1>Bar Service App</h1>
          <h2>Connect to a Business!</h2>
          // add value to input to grab for params in Link
          <input type="text" placeholder="Unique ID:" value={this.props.userIdInput} onChange={(e) => this.props.dispatch(actions.proccessUserIdInput(e.target.value))}/>
          <Link to={{pathname: '/client/dashboard', params: {id: this.props.userIdInput}} }><button>Connect</button></Link>
          <h3>Business Sign Up</h3>
          <Link to="/signup"><button>Sign Up</button></Link>
        </div>
      )}
  }

  const mapStateToProps = (state, props) => ({
    userIdInput: state.idInput
  })

export default connect(mapStateToProps)(LandingPage);
