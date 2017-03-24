import { SIGN_UP,
        SIGN_UP_ERROR,
        LOGIN,
        LOGIN_ERROR,
        PROCESS_USER_EMAIL_INPUT,
        PROCESS_USER_PASSWORD_INPUT,
        PROCESS_USER_NAME_INPUT,
        PROCESS_USER_ID_INPUT,
        PROCESS_USER_TABLE_INPUT
      } from '../actions/signup-login';

const initialState = {
  emailInput: '',
  passwordInput: '',
  nameInput: '',
  idInput: '',
  tableInput: '',
  id: null,
  currentConnection: '',
  businessName: '',
}


export const signupLogingReducer = (state=initialState, action) => {
  console.log(action.type);
  switch(action.type){
    case PROCESS_USER_EMAIL_INPUT:
      return {...state, emailInput: action.emailInput};

    case PROCESS_USER_PASSWORD_INPUT:
      return {...state, passwordInput: action.passwordInput};

    case PROCESS_USER_NAME_INPUT:
      return {...state, nameInput: action.nameInput};

    case PROCESS_USER_ID_INPUT:
      return {...state, idInput: action.idInput};

    case PROCESS_USER_TABLE_INPUT:
      return {...state, tableInput: action.tableInput};

    case SIGN_UP:
      return {...state, currentConnection: action.id };

    case SIGN_UP_ERROR:
      console.error(action.error);
      return state;

    case LOGIN:
      console.log(action.id);
      return {...state, currentConnection: action.id, businessName: action.businessName};

    case LOGIN_ERROR:
      console.error(action.error);
      return state;

    default:
      return state;
  }
}
