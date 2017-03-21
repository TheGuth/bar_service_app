import React from 'react';
import {connect} from 'react-redux';

export class BusinessDash extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {


        return (
          <div className="business-dash-container">
            <div className="profile">
              <h1>Bar Name</h1>
              <h3>Address</h3>
              <h3>Phone</h3
              <h3>Website</h3>
              <h3>Id</h3>
              <img></img>
            </div>
            <div className="orders-queue">
             <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
             </ul>
            </div>
            <div className="menu">
            <ul>
             <li></li>
             <li></li>
             <li></li>
             <li></li>
             <li></li>
            </ul>
            </div>
          </div>
        )
    }
  }
export default connect(BusinessDash);
