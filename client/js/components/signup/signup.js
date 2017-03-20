import React from 'react';
import {connect} from 'react-redux';

export class Signup extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="signup-container">
            <h1>App Name</h1>
            <h3>enticing description</h3>
            <form>
              <label>Name:</label>
              <input type="text" placeholder="Name"/>
              <label>Email:</label>
              <input type="text" placeholder="email"/>
              <label>Password:</label>
              <input type="text" placeholder="password"/>
              <label>Business?</label>
              <input type="checkbox"></input>
              <button type="submit">Submit</button>
            </form>
          </div>
        )
    }
  }
export default connect()(Signup);
