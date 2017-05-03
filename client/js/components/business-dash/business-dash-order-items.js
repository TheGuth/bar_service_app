import React from 'react';
import {connect} from 'react-redux';
import { completeOrder } from '../../actions/order';

export class BusinessOrderItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      let orderItems;
      if (this.props.orders) {
        orderItems = this.props.orders.map((order, id) => {
          const orderDrinks = order.order.map((drink, drinkid) => {
            return <li key={drinkid}>
              <p>{drinkid + 1}. {drink.drinkName} - ${drink.price}</p>
            </li>;
          });
          return <li key={order.id}>
                    <h1>{order.clientName}</h1>
                    <p>Table:   {order.table}</p>
                    <p>Email:   {order.clientEmail}</p>
                    <p>Total:   ${order.orderTotal}</p>
                    <p># Drinks:   {order.totalDrinks}</p>
                    <ol>
                      {orderDrinks}
                    </ol>
                    <button onClick={() => this.props.dispatch(completeOrder(order.id, this.props.currentConnection))} >Ding Order Done</button>
                  </li>;
        });
      }

      return (
        <div>
          {orderItems}
        </div>
      );
    }
  }

const mapStateToProps = (state, props) => ({
  orders: state.orderReducer.orders,
  currentConnection: state.signupLogingReducer.currentConnection,
});

export default connect(mapStateToProps)(BusinessOrderItems);
