import React from 'react';
import {connect} from 'react-redux';

export class BusinessDash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      return (
        <div className="landing-page-container">
          <button>Log In</button>
          <h1>Bar Service App</h1>
          <h2>Connect to a Business!</h2>
          <input type="text" placeholder="Unique ID:"/>
          <button>Connect</button>
          <h3>Business Sign Up</h3>
          <button>Sign Up</button>
        </div>
      )}
  }
export default connect(BusinessDash);
