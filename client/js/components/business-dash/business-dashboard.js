import React from 'react';
import {connect} from 'react-redux';
import { fetchOrders,
         completeOrder
       } from '../../actions/order';
import { addDrinkToMenu,
         processNewDrinkName,
         processNewDrinkPrice,
         processNewDrinkIngredients,
         deleteDrinkFromMenu
  } from '../../actions/menu';

export class BusinessDash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      this.props.dispatch(fetchOrders(this.props.currentConnection));
    }

    render() {

      const businessMenuItems = this.props.menu.map((item, id) => {
        return <li key={id}>
                  <h1>{item.drinkName}</h1>
                  <h3>Price: {item.price}</h3>
                  <h3>Ingredients: {item.ingredients}</h3>
                  <button onClick={() => this.props.dispatch(deleteDrinkFromMenu(item.id, this.props.currentConnection))} >Delete Drink</button>
                </li>
      });


      let orderItems;
      if (this.props.orders) {
        orderItems = this.props.orders.map((order, id) => {
          const orderDrinks = order.order.map((drink, drinkid) => {
            return <li key={drinkid}>
              <p>{drink.drinkName} - ${drink.price}</p>
            </li>
          })
          return <li key={order.id}>
                    <h1>Client Name: {order.clientName}</h1>
                    <p>Table Number: {order.table}</p>
                    <p>Client Email: {order.clientEmail}</p>
                    <p>Total Order Price: {order.orderTotal}</p>
                    <p>Number of Drinks: {order.totalDrinks}</p>
                    <ul>
                      {orderDrinks}
                    </ul>
                    <button onClick={() => this.props.dispatch(completeOrder(order.id, this.props.currentConnection))} >Ding Order Done</button>
                  </li>
        });
      }

        return (
          <div className="business-dash-container">
            <div className="profile">
              <h1>{this.props.businessName}</h1>
              <h3>{this.props.currentConnection}</h3>
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
            <div className="addDrink">
              <form onSubmit={(e) => {
                   e.preventDefault();
                   this.props.dispatch(addDrinkToMenu(this.props.currentConnection, this.props.newDrinkName, this.props.newDrinkPrice, this.props.newDrinkIngredients));
                   }}>
                <label>Drink Name:</label>
                <input type="text" placeholder="Drink Name" value={this.props.newDrinkName} onChange={(e) => this.props.dispatch(processNewDrinkName(e.target.value))}/>
                <label>Price:</label>
                <input type="text" placeholder="Price" value={this.props.newDrinkPrice} onChange={(e) => this.props.dispatch(processNewDrinkPrice(e.target.value))}/>
                <label>Ingredients</label>
                <input type="text" placeholder="Ingredients" value={this.props.newDrinkIngredients} onChange={(e) => this.props.dispatch(processNewDrinkIngredients(e.target.value))}/>
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
