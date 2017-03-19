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
              <input>Name</input>
              <label>Email:</label>
              <input>email</input>
              <label>Password:</label>
              <input>password</input>
              <label>Business?</label>
              <input type="checkbox"></input>
              <button type="submit">Submit</button>
            </form>
          </div>
        )
    }
  }
export default connect(Signup);
