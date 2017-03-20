
import * as actions from '../actions/actions';


const initialState = {
  client: {
    id: null,
    name: '',
    email: '',
    menu: [],
    orderStatus: null,
    orderingFrom: ''
  },
  login: {
    emailInput: '',
    passwordInput: '',
  },
  business: {
    id: null,
    name: '',
    email: '',
    menu: [],
    orderQueue: [],
    orderHistory: []
  }
};

export const reducer = (state=initialState, action) => {
  switch(action.type){

    case actions.PROCESS_USER_EMAIL_INPUT:
    console.log(action.emailInput);
      return {...state, login: {emailInput: action.emailInput}};

    case actions.PROCESS_USER_PASSWORD_INPUT:
      return {...state, login: {passwordInput: action.passwordInput}};

    case actions.LOGIN:
      console.log(state.login.emailInput);
      console.log(state.login.passwordInput);
      return state;

    case actions.SIGNUP:
      return state;

    default:
      return state;
  }
}
