import React from 'react';
import {connect} from 'react-redux';
import { submitOrder } from '../../actions/order';

import {fetchMenu} from '../../actions/menu';

export class ClientOrderForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          userNameInput: '',
          userEmailInput: '',
          userTableInput: '',
        };
    }

    render() {
      const { userNameInput, userEmailInput, userTableInput } = this.state;
        const { currentOrder } = this.props;
        return (
          <form onSubmit={(e) => {
              e.preventDefault();
              this.props.dispatch(submitOrder(userNameInput, userEmailInput, userTableInput, currentOrder, this.props.currentConnection));
            }}>
            <label>Name:</label>
            <input type="text" value={this.state.userNameInput} onChange={(e) => this.setState({userNameInput: e.target.value})}></input>
            <label>Table:</label>
            <input type="text" value={this.state.userTableInput} onChange={(e) => this.setState({userTableInput: e.target.value})}></input>
            <label>Email:</label>
            <input type="email" value={this.state.userEmailInput} onChange={(e) => this.setState({userEmailInput: e.target.value})}></input>
            <button type="submit">Submit</button>
          </form>
        );
    }
  }

  const mapStateToProps = (state, props) => ({
    currentConnection: state.connectToBusinessReducer.currentConnection,
    currentOrder: state.orderReducer.currentOrder,
  });

export default connect(mapStateToProps)(ClientOrderForm);
