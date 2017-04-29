import 'isomorphic-fetch';

// Sign Up Actions

export const userSignUp = (emailInput, passwordInput, nameInput) => dispatch => {
    console.log('hello');
    const data = {email: emailInput, password: passwordInput, businessName: nameInput};
    return fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then(data => {
      console.log(data);
      console.log(data.token);
      console.log(data.user);
      localStorage.setItem('token', data.token);
      return dispatch(signup(data.user))
    }).catch(error => {
      return dispatch(signupError(error));
    });
};

export const SIGN_UP = 'SIGN_UP';
export const signup = (data) => ({
    type: SIGN_UP,
    email: data.email,
    id: data._id,
    businessName: data.businessName
});

export const SIGN_UP_ERROR = 'SIGN_UP_ERROR';
export const signupError = (error) => ({
    type: SIGN_UP_ERROR,
    error: error
});

// Login Actions

export const userLogin = (emailInput, passwordInput) => dispatch => {
    const data = {email: emailInput, password: passwordInput};
    return fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then(data => {
      return dispatch(login(data.user));
    }).catch(error => {
      return dispatch(loginError(error));
    });
};

export const LOGIN = 'LOGIN';
export const login = (data) => ({
    type: LOGIN,
    email: data.username,
    id: data.id,
    businessName: data.businessName
});

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = (error) => ({
    type: LOGIN_ERROR,
    error: error
});

// Input Actions

export const PROCESS_USER_EMAIL_INPUT = 'PROCESS_USER_EMAIL_INPUT';
export const proccessUserEmailInput = (emailInput) => ({
  type: PROCESS_USER_EMAIL_INPUT,
  emailInput: emailInput
});

export const PROCESS_USER_PASSWORD_INPUT = 'PROCESS_USER_PASSWORD_INPUT';
export const proccessUserPasswordInput = (passwordInput) => ({
  type: PROCESS_USER_PASSWORD_INPUT,
  passwordInput: passwordInput
});

export const PROCESS_USER_NAME_INPUT = 'PROCESS_USER_NAME_INPUT';
export const proccessUserNameInput = (nameInput) => ({
  type: PROCESS_USER_NAME_INPUT,
  nameInput: nameInput
});

export const PROCESS_USER_ID_INPUT = 'PROCESS_USER_ID_INPUT';
export const proccessUserIdInput = (idInput) => ({
  type: PROCESS_USER_ID_INPUT,
  idInput: idInput
});

export const PROCESS_USER_TABLE_INPUT = 'PROCESS_USER_TABLE_INPUT';
export const proccessUserTableInput = (tableInput) => ({
  type: PROCESS_USER_TABLE_INPUT,
  tableInput: tableInput
});
