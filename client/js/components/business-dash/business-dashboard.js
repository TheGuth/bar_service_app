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
            </div>
            <div className="orders-queue">
            </div>
            <div className="menu">
            </div>
          </div>
        )
    }
  }
export default connect(BusinessDash);
