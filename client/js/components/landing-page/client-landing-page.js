import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {proccessUserIdInput} from '../../actions/signup-login';

export class ClientLandingPage extends React.Component {
    constructor(props) {
        super(props);

      this.state = {
        id: ''
      }
    }

    onSubmit(e) {
      this.setState({id: e.target.value})
      this.props.dispatch(proccessUserIdInput(e.target.value));
    }

    render() {
      return (
        <div className="landing-page-container">
          <div className="landing-page-title">
            <h1>Drunk Fast</h1>
          </div>
          <div className="landing-page-description">
            <p>Why fight the crowd, when you can order your drinks without missing a beat.</p>
          </div>
          <div className="landing-page-connect">
            <h2>Connect to a Business!</h2>
            <input type="text" placeholder="Unique ID:" value={this.state.id} onChange={(e) => this.onSubmit(e) }/>
            <Link to={{pathname: '/client/dashboard', params: {id: this.state.id}}}><button className="btn btn-primary btn-lg btn-block">Connect</button></Link>
          </div>
        </div>
      )}
  }

  const mapStateToProps = (state, props) => ({
    currentConnection: state.currentConnection
  })

export default connect(mapStateToProps)(ClientLandingPage);
