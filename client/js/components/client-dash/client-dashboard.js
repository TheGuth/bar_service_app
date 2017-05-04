import React from 'react';
import {connect} from 'react-redux';
import {fetchMenu} from '../../actions/menu';
import ClientMenuItems from './client-dash-menu';
import ClientCurrentOrder from './client-dash-currentOrder';
import ClientOrderForm from './client-dash-orderForm';

export class ClientDash extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
      this.props.dispatch(fetchMenu(this.props.location.params.id));
    }

    render() {
        console.log(this.props.businessName);
        return (
          <div className="client-dash-container">
            <h1>{this.props.businessName}</h1>
            <div className="client-page-menu-list">
              <ClientMenuItems />
            </div>
            <div className="client-page-order-list">
              <ClientCurrentOrder />
            </div>
            <div className="client-page-form">
              <ClientOrderForm />
            </div>
          </div>
        );
    }
  }

  const mapStateToProps = (state, props) => ({
    businessName: state.connectToBusinessReducer.businessName
  });

export default connect(mapStateToProps)(ClientDash);
