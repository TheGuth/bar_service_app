

// Login

export const userLogin = login => (emailInput, passwordInput) => {
    const url = new URL('http://localhost:8080/login');
    const data = {username: emailInput, password: passwordInput};

    return fetch(url, {
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
      return dispatch(login())
    }).catch(error => {
      return dispatch(login(error));
    });
};


export const LOGIN = 'LOGIN';
export const login = (data) => ({
    type: LOGIN,
    email: data.username,
    id: data,
    businessName: data.businessName

});

export const LOGIN_ERROR = 'LOGIN_ERROR';
export const loginError = (error) => ({
    type: LOGIN_ERROR,
    error: error
});

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


//client
export const CONNECT_TO_BUSINESS = 'CONNECT_TO_BUSINESS';
export const connectToBusiness = () => ({
    type: CONNECT_TO_BUSINESS
});


export const ORDER_DRINK = 'ORDER_DRINK';
export const orderDrink = () => ({
    type: ORDER_DRINK
});


export const PREVIOUS_MENU_PAGE = 'PREVIOUS_MENU_PAGE';
export const previousMenuPage = () => ({
    type: PREVIOUS_MENU_PAGE
});

export const NEXT_MENU_PAGE = 'NEXT_MENU_PAGE';
export const nextMenuPage = () => ({
    type: NEXT_MENU_PAGE
});

//business


export const SIGNUP = 'SIGNUP';
export const signup = () => ({
    type: SIGNUP
});


export const CREATE_DRINK = 'CREATE_DRINK';
export const createDrink = () => ({
    type: CREATE_DRINK
});

export const DELETE_DRINK = 'DELETE_DRINK';
export const deleteDrink = () => ({
    type: DELETE_DRINK
});

export const UPDATE_DRINK = 'UPDATE_DRINK';
export const updateDrink = () => ({
    type: UPDATE_DRINK
});

export const DRINK_IS_READY = 'DRINK_IS_READY';
export const drinkIsReady = () => ({
    type: DRINK_IS_READY
});

export const PREVIOUS_ORDER_PAGE = 'PREVIOUS_ORDER_PAGE';
export const previousOrderPage = () => ({
    type: PREVIOUS_ORDER_PAGE
});

export const NEXT_ORDER_PAGE = 'NEXT_ORDER_PAGE';
export const nextOrderPage = () => ({
    type: NEXT_ORDER_PAGE
});
