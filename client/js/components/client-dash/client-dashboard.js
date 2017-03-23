import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions'

export class ClientDash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      this.props.dispatch(actions.fetchMenu(this.props.location.params.id));
    }

    render() {

      // this.props.dispatch(actions.(this.props.currentConnection));

      const menuItems = this.props.menu.map((item, id) => {
        // addd onClick function to each list item
        return <li key={id}>
                  <h1>Name: {item.drinkName}</h1>
                  <h3>Price: {item.price}</h3>
                  <h3>Ingredients: {item.ingredients}</h3>
                  <button onClick={() => this.props.dispatch(actions.addOrder(item.drinkName, item.price))}>Order</button>
                </li>
      });

      // add current total bottom right:
      const currentOrders = this.props.currentOrder.map((order, id) => {
        return <li key={id}>
                <h1>Name: {order.drinkName}</h1>
                <p>Price: {order.price}</p>
                <button onClick={() => this.props.dispatch(actions.removeOrder(id))}>Remove Item</button>
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
                  this.props.dispatch(actions.submitOrder(userNameInput, userEmailInput, userTableInput, currentOrder, this.props.currentConnection))
                }}>
                <label>Name:</label>
                <input type="text" value={this.props.userNameInput} onChange={(e) => this.props.dispatch(actions.proccessUserNameInput(e.target.value))}></input>
                <label>Table:</label>
                <input type="text" value={this.props.userTableInput} onChange={(e) => this.props.dispatch(actions.proccessUserTableInput(e.target.value))}></input>
                <label>Email:</label>
                <input type="text" value={this.props.userEmailInput} onChange={(e) => this.props.dispatch(actions.proccessUserEmailInput(e.target.value))}></input>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        )
    }
  }

  const mapStateToProps = (state, props) => ({
    menu: state.menu,
    currentConnection: state.currentConnection,
    orders: state.orders,
    currentOrder: state.currentOrder,
    userNameInput: state.nameInput,
    userEmailInput: state.emailInput,
    userTableInput: state.tableInput,
    businessName: state.businessName
  })

export default connect(mapStateToProps)(ClientDash);
