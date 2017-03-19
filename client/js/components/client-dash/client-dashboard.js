import React from 'react';
import {connect} from 'react-redux';

export class ClientDash extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {


        return (
          <div className="client-dash-container">
            <div className="profile">
            </div>
            <div className="previous-orders">
            </div>
            <div className="drink-status">
            </div>
            <div className="order-drink">
            </div>
          </div>
        )
    }
  }
export default connect(ClientDash);
