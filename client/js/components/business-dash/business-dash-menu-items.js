import React from 'react';
import {connect} from 'react-redux';
import { deleteDrinkFromMenu } from '../../actions/menu';

export class BusinessMenuItems extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
      const businessMenuItems = this.props.menu.map((item, id) => {
        return (
          <li key={id}>
            <h1>{item.drinkName} - ${item.price}</h1>
            <h3>Ingredients</h3>
            <p>{item.ingredients}</p>
            <button onClick={() => this.props.dispatch(deleteDrinkFromMenu(item.id, this.props.currentConnection))} >Delete</button>
          </li>
          );
      });
      return (
        <div>
          {businessMenuItems}
        </div>
      );
    }
  }

const mapStateToProps = (state, props) => ({
  currentConnection: state.signupLogingReducer.currentConnection,
  menu: state.menuReducer.menu,
});

export default connect(mapStateToProps)(BusinessMenuItems);
