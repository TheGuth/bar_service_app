import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {proccessUserIdInput} from '../../actions/signup-login';

export class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="landing-page-container">
          <div className="landing-page-title">
            <h1>Q-Less</h1>
          </div>
          <div className="landing-page-description">
            <p>Why fight the crowd, when you can order your drinks without missing a beat.</p>
          </div>
          <div className="landing-page-login">
            <h1>Start Connecting Now</h1>
            <p>Why wait in line when you can order from your phone</p>
            <Link to="/login/client"><button>Users Join Here</button></Link>
          </div>
          <div className="landing-page-login">
            <h1>Business join Here</h1>
            <p>Drunk Fast provides the perfect platform for business to sell directly to their clients, without the hassel of dealing with lines.</p>
            <Link to="/login/business"><button>I am A Business</button></Link>
          </div>
        </div>
      );
    }
  }

  const mapStateToProps = (state, props) => ({
  });

export default connect(mapStateToProps)(LandingPage);
