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
        return <li key={id}>
                  <h1>{item.drinkName} - ${item.price}</h1>
                  <h3>Ingredients</h3>
                  <p>{item.ingredients}</p>
                  <button onClick={() => this.props.dispatch(actions.deleteDrinkFromMenu(item.id, this.props.currentConnection))} >Delete</button>
                </li>
      });


      let orderItems;
      if (this.props.orders) {
        orderItems = this.props.orders.map((order, id) => {
          const orderDrinks = order.order.map((drink, drinkid) => {
            return <li key={drinkid}>
              <p>{drinkid + 1}. {drink.drinkName} - ${drink.price}</p>
            </li>
          })
          return <li key={order.id}>
                    <h1>{order.clientName}</h1>
                    <p>Table:   {order.table}</p>
                    <p>Email:   {order.clientEmail}</p>
                    <p>Total:   ${order.orderTotal}</p>
                    <p># Drinks:   {order.totalDrinks}</p>
                    <ol>
                      {orderDrinks}
                    </ol>
                    <button onClick={() => this.props.dispatch(actions.completeOrder(order.id, this.props.currentConnection))} >Ding Order Done</button>
                  </li>
        });
      }

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
              {orderItems}
             </ul>
            </div>
            <div className="business-dash-menu">
              <h1>Menu</h1>
              <ul>
                {businessMenuItems}
              </ul>
            </div>
            <div className="business-dash-addDrink-form">
              <h1>Add Menu Item</h1>
              <form onSubmit={(e) => {
                   e.preventDefault();
                   this.props.dispatch(actions.addDrinkToMenu(this.props.currentConnection, this.props.newDrinkName, this.props.newDrinkPrice, this.props.newDrinkIngredients));
                   }}>
                <label>Drink Name</label>
                <input type="text" placeholder="Drink Name" value={this.props.newDrinkName} onChange={(e) => this.props.dispatch(actions.processNewDrinkName(e.target.value))}/>
                <label>Price</label>
                <input type="text" placeholder="Price" value={this.props.newDrinkPrice} onChange={(e) => this.props.dispatch(actions.processNewDrinkPrice(e.target.value))}/>
                <label>Ingredients</label>
                <input type="text" placeholder="Ingredients" value={this.props.newDrinkIngredients} onChange={(e) => this.props.dispatch(actions.processNewDrinkIngredients(e.target.value))}/>
                <button type="submit">Add Drink</button>
              </form>
            </div>
          </div>
        )
    }
  }

const mapStateToProps = (state, props) => ({
  orders: state.orders,
  currentConnection: state.currentConnection,
  menu: state.menu,
  newDrinkName: state.newDrinkName,
  newDrinkPrice: state.newDrinkPrice,
  newDrinkIngredients: state.newDrinkIngredients,
  businessName: state.businessName
})

export default connect(mapStateToProps)(BusinessDash);
