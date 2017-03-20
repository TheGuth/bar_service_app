
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
  emailInput: '',
  passwordInput: '',
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
      return {...state, emailInput: action.emailInput};

    case actions.PROCESS_USER_PASSWORD_INPUT:
      return {...state, passwordInput: action.passwordInput};

    case actions.LOGIN:
      console.log(state.emailInput);
      console.log(state.passwordInput);
      return state;

    case actions.SIGNUP:
      return state;

    default:
      return state;
  }
}
