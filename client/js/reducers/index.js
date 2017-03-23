
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
  businessName: '',
  menu: [],
  orderHistory: [],
  orders: [],
  currentOrder: [],
  currentConnection: '',
  newDrinkName: '',
  newDrinkPrice: '',
  newDrinkIngredients: ''
}

// 58cffedf015af4d521e640bc

// client side
// get rid of name
// add $ instead of saying price,
// mess with alignment for cards.
// dark gray instead of a hard black;
// add some padding to the form:

// Business Side
// let it breath; padding:
// soften the hard black or change cards into little reciepts


// constant reloading on business dashboard (needs to be fixed);
// add redirects for when businessConnection is wrong

// afternoon Goals
// 1. CSS
// 2. Refactor
// 3. Squash bugs/find bugs

// Continue to polish app with css
// css mobile first, then tablet, then pc views // responsive design
// Refactor actions and reducers into seperate groups

///////////////////////////////////////////////
// Go over this with mentor // or add hacked version

// web socket library stuff
// socket.io for real time client to business orders;
// add socket.io for real time order feedback to client side

// authentication bonus

// version 1

// version 2:
// client profile
// client authenticaion
// business profile

export const reducer = (state=initialState, action) => {
  console.log(action.type);
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
      return {...state, currentConnection: action.id, businessName: action.businessName};

    case actions.LOGIN_ERROR:
      console.error(action.error);
      return state;

    case actions.SIGNUP:
      return state;

    case actions.BUSINESS_INFO_SUCCESS:
      return {...state, businessName: action.data.businessName};

    case actions.BUSINESS_INFO_ERROR:
      console.error(action.error)
      return state;

    case actions.CONNECT_TO_BUSINESS:
      return {...state, currentConnection: action.currentConnection};

    case actions.LOAD_MENU:
      console.log(action.data);
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
      const currentOrder = state.currentOrder.slice();
      currentOrder.push({drinkName: action.drinkName, price: action.price});
      return {...state, currentOrder: currentOrder};

    case actions.ADD_ORDER_ERROR:
      console.error(action.error);
      return state;

    case actions.REMOVE_ORDER:
      const currentOrderRemoval = state.currentOrder.slice();
      currentOrderRemoval.splice(action.id, 1);
      return {...state, currentOrder: currentOrderRemoval};

    case actions.REMOVE_ORDER_ERROR:
      console.error(action.error);
      return state;

    case actions.ORDER_SUCCESS:
      console.log('goodbye');
      console.log(state.currentOrder);
      return {...state, currentOrder: []};

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

    case actions.DELETE_DRINK_ERROR:
      console.error(action.error);
      return state;

    case actions.PROCESS_NEW_DRINK_NAME:
      return {...state, newDrinkName: action.newDrinkName};

    case actions.PROCESS_NEW_DRINK_PRICE:
      return {...state, newDrinkPrice: action.newDrinkPrice};

    case actions.PROCESS_NEW_DRINK_INGREDIENTS:
      return {...state, newDrinkIngredients: action.newDrinkIngredients};

    case actions.CREATE_DRINK:
    return

    default:
      return state;
  }
}
