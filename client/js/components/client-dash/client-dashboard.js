import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/actions'

export class ClientDash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      this.props.dispatch(actions.fetchMenu(this.props.currentConnection));
    }

    render() {

      const menuItems = this.props.menu.map((item, id) => {
        // addd onClick function to each list item
        console.log(item);
        return <li key={id}>
                  <h1>{item.drinkName}</h1>
                  <h3>{item.price}</h3>
                  <h3>{item.ingredients}</h3>
                </li>
      });
      // this.props.location.params.id
      // this holds the currentConnection from landing page
      
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
    menu: state.menu,
    currentConnection: state.currentConnection
  })

export default connect(mapStateToProps)(ClientDash);
