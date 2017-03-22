
import * as actions from '../actions/actions';

// when inputs in state no longer need a value be set to '';
const initialState = {
  emailInput: '',
  passwordInput: '',
  nameInput: '',
  idInput: '',
  tableInput: '',
  id: null,
  name: '',
  email: '',
  menu: [],
  orderHistory: [],
  orders: [],
  currentOrder: [],
  currentConnection: ''
}
// 58cffedf015af4d521e640bc

export const reducer = (state=initialState, action) => {
  switch(action.type){

    case actions.PROCESS_USER_EMAIL_INPUT:
      return {...state, emailInput: action.emailInput};

    case actions.PROCESS_USER_PASSWORD_INPUT:
      return {...state, passwordInput: action.passwordInput};

    case actions.PROCESS_USER_NAME_INPUT:
      return {...state, nameInput: action.nameInput};

    case actions.PROCESS_USER_ID_INPUT:
      return {...state, idInput: action.idInput};

    case actions.PROCESS_USER_TABLE_INPUT:
      return {...state, tableInput: action.tableInput};

    case actions.SIGN_UP:
      return {...state, currentConnection: action.id };

    case actions.SIGN_UP_ERROR:
      console.error(action.error);
      return state;

    case actions.LOGIN:
      console.log(action.id);
      return {...state, currentConnection: action.id};

    case actions.LOGIN_ERROR:
      console.error(action.error);
      return state;

    case actions.SIGNUP:
      return state;

    case actions.CONNECT_TO_BUSINESS:
      return {...state, currentConnection: action.currentConnection};

    case actions.LOAD_MENU:
      return {...state, menu: action.data};

    case actions.LOAD_MENU_ERROR:
      console.error(action.error);
      return state;

    case actions.GRAB_ORDERS:
      console.log(action.data);
      return {...state, orders: action.data};

    case actions.GRAB_ORDERS_ERROR:
      console.error(action.error);
      return state;

    case actions.ADD_ORDER:
      console.log(state.orders);
      const currentOrder = state.currentOrder.slice();
      currentOrder.push({drinkName: action.drinkName, price: action.price});
      return {...state, currentOrder: currentOrder};

    case actions.ADD_ORDER_ERROR:
      console.error(action.error);
      return state;

    case actions.ORDER_SUCCESS:
      return state;

    case actions.ORDER_FAILURE:
      console.error(action.error);
      return state;

    case actions.DRINK_IS_READY:
      return state;

    case actions.DRINK_IS_READY_ERROR:
      console.error(action.error);
      return state;

    case actions.DELETE_DRINK:
      return state;

    default:
      return state;
  }
}
