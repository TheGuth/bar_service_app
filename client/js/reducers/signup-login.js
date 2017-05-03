import { SIGN_UP,
        CLIENT_SIGN_UP,
        SIGN_UP_ERROR,
        LOGIN,
        CLIENT_LOGIN,
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
  authenticated: false,
};


export const signupLogingReducer = (state=initialState, action) => {
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
      console.log(action);
      return {...state, currentConnection: action.id, authenticated: true};

    case CLIENT_SIGN_UP:
      console.log(action);
      return { ...state, authenticated: true };

    case SIGN_UP_ERROR:
      console.error(action.error);
      return state;

    case LOGIN:
      return {...state, authenticated: true, currentConnection: action.id, businessName: action.businessName};

    case CLIENT_LOGIN:
      return {...state, authenticated: true, };

    case LOGIN_ERROR:
      console.error(action.error);
      return state;

    default:
      return state;
  }
};
