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
      const menuItems = this.props.menu.map((item, id) => {
        // addd onClick function to each list item
        return <li key={id}>
                  <h1>{item.drinkName} - ${item.price}</h1>
                  <p>Made with the best ingredients know to man</p>
                  <button onClick={() => this.props.dispatch(actions.addOrder(item.drinkName, item.price))}>Order</button>
                </li>
      });

      const currentOrder = this.props.currentOrders.map((order, id) => {
        console.log(order);
        return <li key={id}>
                <h1>Name: {order.drinkName}</h1>
                <p>Price: {order.price}</p>
               </li>
      })
      // this.props.location.params.id
      // this holds the currentConnection from landing page
      const {userNameInput, userEmailInput, userTableInput, orders} = this.props;
      console.log(this.props.userNameInput);
        return (
          <div className="client-dash-container">
            <div className="client-page-menu-list">
              <ul>
                {menuItems}
              </ul>
            </div>
            <div className="client-page-order-list">
              <ul>
                {currentOrder}
              </ul>
            </div>
            <div className="client-page-form">
              <form onSubmit={() => this.props.dispatch(actions.submitOrder(userNameInput, userEmailInput, userTableInput, orders, this.props.currentConnection))}>
                <label className="client-form-name">Name</label>
                <input type="text" value={this.props.userNameInput} onChange={(e) => this.props.dispatch(actions.proccessUserNameInput(e.target.value))}></input>
                <label className="client-form-table">Table</label>
                <input type="text" value={this.props.userTableInput} onChange={(e) => this.props.dispatch(actions.proccessUserTableInput(e.target.value))}></input>
                <label className="client-form-email">Email</label>
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
    currentOrders: state.currentOrder,
    userNameInput: state.nameInput,
    userEmailInput: state.emailInput,
    userTableInput: state.tableInput
  })

export default connect(mapStateToProps)(ClientDash);
