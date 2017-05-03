import React from 'react';
import {connect} from 'react-redux';

export class Menu extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="menu-container">
            <h1>Menu</h1>
            <ul>
              <li>drink</li>
              <li>drink</li>
              <li>drink</li>
              <li>drink</li>
            </ul>
            <button>previous</button>
            <button>next</button>
          </div>
        );
    }
  }
  
export default connect(Menu);
