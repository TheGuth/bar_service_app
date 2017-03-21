import React from 'react';
import {connect} from 'react-redux';
import * as action from '../../actions/actions'

export class ClientDash extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

      const menuItems = props.menu.map((item, id) => {
        return <li key={id}>
                  <h1>{item.drinkName}</h1>
                  <h3>{item.price}</h3>
                  <h3>{item.ingredients}</h3>
                </li>
      });
      
      {this.props.dispatch(actions.fetchMenu());}
        return (

          <div className="client-dash-container">
            <div className="menu">
              <ul>
                {menuItems}
              </ul>
            </div>
            <div className="client-input">
              <form onSubmit={(e) => {
                e.preventDefault();
              }}>
                <label>Name:</label>
                <input type="text"></input>
                <label>Table:</label>
                <input type="text"></input>
                <label>Email:</label>
                <input type="text"></input>
                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="drink-status">
            </div>
            <div className="order-drink">
            </div>
          </div>
        )
    }
  }

  const mapStateToProps = (state, props) => ({
    menu: state.menu
  })

export default connect(mapStateToProps)(ClientDash);
