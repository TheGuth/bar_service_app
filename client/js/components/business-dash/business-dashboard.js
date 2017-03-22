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

      const businessMenuItems = this.props.menu.map((item, id) => {
        console.log(item.id);
        return <li key={id}>
                  <h1>{item.drinkName}</h1>
                  <h3>Price: {item.price}</h3>
                  <h3>Ingredients: {item.ingredients}</h3>
                  <button onClick={() => this.props.dispatch(actions.deleteDrinkFromMenu(item.id, this.props.currentConnection))} >Delete Drink</button>
                </li>
      });

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
          return <li key={order.id}>
                    <h1>Client Name: {order.clientName}</h1>
                    <p>Table Number: {order.table}</p>
                    <p>Client Email: {order.clientEmail}</p>
                    <p>Total Order Price: {order.orderTotal}</p>
                    <p>Number of Drinks: {order.totalDrinks}</p>
                    <button onClick={() => this.props.dispatch(actions.completeOrder(order.id, this.props.currentConnection))} >Ding Order Done</button>
                  </li>
        });
      }

        return (
          <div className="business-dash-container">
            <div className="profile">
              <h1>Bar Name</h1>
              <h3>Id</h3>
            </div>
            <div className="orders-queue">
             <ul>
              {orderItems}
             </ul>
            </div>
            <div className="menu">
            <ul>
              {businessMenuItems}
            </ul>
            </div>
          </div>
        )
    }
  }

const mapStateToProps = (state, props) => ({
  orders: state.orders,
  currentConnection: state.currentConnection,
  menu: state.menu
})

export default connect(mapStateToProps)(BusinessDash);
