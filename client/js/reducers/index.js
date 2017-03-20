
import * as actions from '../actions/actions';


const initialState = {
  emailInput: '',
  passwordInput: '',
  id: null,
  name: '',
  email: '',
  menu: [],
  orderQueue: [],
  orderHistory: []
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

    case actions.LOGIN:
      return state;

    case actions.SIGNUP:
      return state;

    default:
      return state;
  }
}
