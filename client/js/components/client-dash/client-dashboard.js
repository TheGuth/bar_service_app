import React from 'react';
import {connect} from 'react-redux';
import { addOrder,
         removeOrder,
         submitOrder
       } from '../../actions/order';
import { proccessUserNameInput,
         proccessUserTableInput,
         proccessUserEmailInput
       } from '../../actions/signup-login';

import {fetchMenu} from '../../actions/menu'

export class ClientDash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      this.props.dispatch(fetchMenu(this.props.location.params.id));
    }

    render() {

      const menuItems = this.props.menu.map((item, id) => {
        // addd onClick function to each list item
        return <li key={id}>
                  <h1>{item.drinkName} - ${item.price}</h1>
                  <h3>Ingredients</h3>
                  <h3>{item.ingredients}</h3>
                  <button onClick={() => this.props.dispatch(addOrder(item.drinkName, item.price))}>Order</button>
                </li>
      });

      // add current total bottom right:
      const currentOrders = this.props.currentOrder.map((order, id) => {
        return <li key={id}>
                <h1>{order.drinkName}</h1>
                <p>${order.price}</p>
                <button onClick={() => this.props.dispatch(removeOrder(id))}>Remove Item</button>
               </li>
      })

      let total = 0;
      const currentOrderTotal = this.props.currentOrder.forEach((order) => {
        total += Number(order.price);
      })

      // this.props.location.params.id
      // this holds the currentConnection from landing page
      const {userNameInput, userEmailInput, userTableInput, currentOrder} = this.props;
        return (
          <div className="client-dash-container">
            <h1>{this.props.businessName}</h1>
            <div className="client-page-menu-list">
              <ul>
                {menuItems}
              </ul>
            </div>
            <div className="client-page-order-list">
              <ul>
                {currentOrders}
                <li>Current Total: ${total}</li>
              </ul>
            </div>
            <div className="client-page-form">
              <form onSubmit={(e) => {
                  e.preventDefault();
                  this.props.dispatch(submitOrder(userNameInput, userEmailInput, userTableInput, currentOrder, this.props.currentConnection))
                }}>
                <label>Name:</label>
                <input type="text" value={this.props.userNameInput} onChange={(e) => this.props.dispatch(proccessUserNameInput(e.target.value))}></input>
                <label>Table:</label>
                <input type="text" value={this.props.userTableInput} onChange={(e) => this.props.dispatch(proccessUserTableInput(e.target.value))}></input>
                <label>Email:</label>
                <input type="email" value={this.props.userEmailInput} onChange={(e) => this.props.dispatch(proccessUserEmailInput(e.target.value))}></input>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )
    }
  }

  const mapStateToProps = (state, props) => ({
    menu: state.menuReducer.menu,
    currentConnection: state.connectToBusinessReducer.currentConnection,
    orders: state.orderReducer.orders,
    currentOrder: state.orderReducer.currentOrder,
    userNameInput: state.signupLogingReducer.nameInput,
    userEmailInput: state.signupLogingReducer.emailInput,
    userTableInput: state.signupLogingReducer.tableInput,
    businessName: state.signupLogingReducer.businessName
  })

export default connect(mapStateToProps)(ClientDash);
