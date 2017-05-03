import React from 'react';
import {connect} from 'react-redux';
import { addDrinkToMenu } from '../../actions/menu';

export class BusinessDrinkForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          newDrinkName: '',
          newDrinkPrice: '',
          newDrinkIngredients: '',
        };
    }

    render() {
        return (
          <div>
            <form onSubmit={(e) => {
                 e.preventDefault();
                 this.props.dispatch(addDrinkToMenu(this.props.currentConnection, this.state.newDrinkName, this.state.newDrinkPrice, this.state.newDrinkIngredients));
                 }}>
              <label>Drink Name</label>
              <input type="text" placeholder="Drink Name" value={this.state.newDrinkName} onChange={(e) => this.setState({newDrinkName: e.target.value})}/>
              <label>Price</label>
              <input type="text" placeholder="Price" value={this.state.newDrinkPrice} onChange={(e) => this.setState({newDrinkPrice: e.target.value})}/>
              <label>Ingredients</label>
              <input type="text" placeholder="Ingredients" value={this.state.newDrinkIngredients} onChange={(e) => this.setState({newDrinkIngredients: e.target.value})}/>
              <button type="submit">Add Drink</button>
            </form>
          </div>
        );
    }
  }

const mapStateToProps = (state, props) => ({
  currentConnection: state.signupLogingReducer.currentConnection,
});

export default connect(mapStateToProps)(BusinessDrinkForm);
