
import * as actions from '../actions/actions';


const initialState = {
  emailInput: '',
  passwordInput: '',
  nameInput: '',
  idInput: '',
  id: null,
  name: '',
  email: '',
  menu: [],
  orderHistory: [],
  orders: [],
  currentConnection: '58cffedf015af4d521e640bc'
}

// const initialState = {
//   client: {
//     id: null,
//     name: '',
//     email: '',
//     menu: [],
//     orderStatus: null,
//     orderingFrom: ''
//   },
//   emailInput: '',
//   passwordInput: '',
//   business: {
//     id: null,
//     name: '',
//     email: '',
//     menu: [],
//     orderQueue: [],
//     orderHistory: []
//   }
// };

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

    case actions.SIGN_UP:
      return state;

    case actions.SIGN_UP_ERROR:
      console.error(action.error);
      return state;

    case actions.LOGIN:
      return {...state, currentConnection: action.id};

    case actions.LOGIN_ERROR:
      console.error(action.error);
      return state;

    case actions.SIGNUP:
      return state;

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

    case actions.ORDER_DRINK:
      console.log(action.data);
      return {...state, menu: action.data};

    case actions.ORDER_DRINK_ERROR:
      console.error(action.error);
      return state;

    case actions.DRINK_IS_READY:
      return state;

    case actions.DRINK_IS_READY_ERROR:
      console.error(action.error);
      return state;

    default:
      return state;
  }
}
