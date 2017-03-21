
import * as actions from '../actions/actions';


const initialState = {
  emailInput: '',
  passwordInput: '',
  nameInput: '',
  id: null,
  name: '',
  email: '',
  menu: [],
  orderQueue: [],
  orderHistory: [],
  orders: [],
  currentConnection: ''
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
      console.log(action.emailInput);
      return {...state, emailInput: action.emailInput};

    case actions.PROCESS_USER_PASSWORD_INPUT:
      console.log(action.passwordInput);
      return {...state, passwordInput: action.passwordInput};

    case actions.PROCESS_USER_NAME_INPUT:
      console.log(action.nameInput);
      return {...state, nameInput: action.nameInput};

    case actions.SIGN_UP:
      return state;

    case actions.SIGN_UP_ERROR:
      console.error(action.error);
      return state;

    case actions.LOGIN:
      return state;

    case actions.LOGIN_ERROR:
      console.error(action.error);
      return state;

    case actions.SIGNUP:
      return state;

    case actions.LOAD_MENU:
      console.log(action.currentConnection);
      return {...state, drinkName: data.drinkName, price: data.price, ingredients: data.ingredients};

    case actions.LOAD_MENU_ERROR:
      console.error(action.error);
      return state;



    default:
      return state;
  }
}
