import React from 'react';
import {connect} from 'react-redux';
import { fetchOrders } from '../../actions/order';
import { addDrinkToMenu } from '../../actions/menu';
import BusinessMenuItems from './business-dash-menu-items';
import BusinessOrderItems from './business-dash-order-items';
import BusinessDrinkForm from './business-dash-drink-form';

export class BusinessDash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      this.props.dispatch(fetchOrders(this.props.currentConnection));

      const myProps = this.props;
      setInterval(() => {
        myProps.dispatch(fetchOrders(myProps.currentConnection));
      }, 5000);
    }

    render() {
        return (
          <div className="business-dash-container">
            <div className="business-dash-header">
              <h1>{this.props.businessName}</h1>
              <h3>Unique ID</h3>
              <p>{this.props.currentConnection}</p>
            </div>
            <div className="business-dash-orders-queue">
             <h2>Current Orders</h2>
             <ul>
              <BusinessOrderItems />
             </ul>
            </div>
            <div className="business-dash-menu">
              <h1>Menu</h1>
              <ul>
                <BusinessMenuItems />
              </ul>
            </div>
            <div className="business-dash-addDrink-form">
              <h1>Add Menu Item</h1>
              <BusinessDrinkForm />
            </div>
          </div>
        );
    }
  }

const mapStateToProps = (state, props) => ({
  currentConnection: state.signupLogingReducer.currentConnection,
  businessName: state.signupLogingReducer.businessName
});

export default connect(mapStateToProps)(BusinessDash);
