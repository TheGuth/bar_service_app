import React from 'react';
import {connect} from 'react-redux';
import { removeOrder } from '../../actions/order';

export class ClientCurrentOrder extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      const currentOrders = this.props.currentOrder.map((order, id) => {
        return (
           <li key={id}>
            <h1>{order.drinkName}</h1>
            <p>${order.price}</p>
            <button onClick={() => this.props.dispatch(removeOrder(id))}>Remove Item</button>
           </li>
         );
      });

      let total = 0;
      this.props.currentOrder.forEach((order) => {
        total += Number(order.price);
      });

        return (
          <ul>
            {currentOrders}
            <li>Current Total: ${total}</li>
          </ul>
        );
    }
  }

  const mapStateToProps = (state, props) => ({
    currentOrder: state.orderReducer.currentOrder,
  });

export default connect(mapStateToProps)(ClientCurrentOrder);
