import React from 'react';
import {connect} from 'react-redux';
import { addOrder } from '../../actions/order';

export class ClientMenuItems extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

      const menuItems = this.props.menu.map((item, id) => {
        return (
          <li key={id}>
            <h1>{item.drinkName} - ${item.price}</h1>
            <h3>Ingredients</h3>
            <h3>{item.ingredients}</h3>
            <button onClick={() => this.props.dispatch(addOrder(item.drinkName, item.price))}>Order</button>
          </li>
          );
      });

        return (
          <ul>
            {menuItems}
          </ul>
        );
    }
  }

  const mapStateToProps = (state, props) => ({
    menu: state.menuReducer.menu,
  });

export default connect(mapStateToProps)(ClientMenuItems);
