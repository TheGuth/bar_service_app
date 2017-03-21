import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions';

export class BusinessDash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      this.props.dispatch(actions.fetchOrders(this.props.currentConnection));
    }

    render() {

      // const drinkOrders = (orders).map(order, id) => {
      //   return <li>
      //     <h1>order.drinkName</h1>
      //     <p>order.price</p>
      //   </li>
      // }
      let orderItems;
      if (this.props.orders) {
        orderItems = this.props.orders.map((order, id) => {
          // addd onClick function to each list item
          return <li key={id}>
                    <h1>{order.clientName}</h1>
                    <p>{order.table}</p>
                    <p>{order.clientEmail}</p>
                    <p>{order.orderTotal}</p>
                    <p>{order.totalDrinks}</p>
                  </li>
        });
      }

        return (
          <div className="business-dash-container">
            <div className="profile">
              <h1>Bar Name</h1>
              <h3>Address</h3>
              <h3>Phone</h3>
              <h3>Website</h3>
              <h3>Id</h3>
              <img></img>
            </div>
            <div className="orders-queue">
             <ul>
              {orderItems}
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
const mapStateToProps = (state, props) => ({
  orders: state.orders,
  currentConnection: state.currentConnection
})

export default connect(mapStateToProps)(BusinessDash);
