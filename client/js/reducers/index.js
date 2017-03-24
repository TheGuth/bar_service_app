import {combineReducers} from 'redux';
import {menuReducer} from './menu';
import {connectToBusinessReducer} from './connect-to-business';
import {signupLogingReducer} from './signup-login';
import {orderReducer} from './order';

export default combineReducers({
  menuReducer,
  connectToBusinessReducer,
  signupLogingReducer,
  orderReducer
});
