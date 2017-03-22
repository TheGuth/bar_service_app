
// Sign Up Actions

export const userSignUp = (emailInput, passwordInput, nameInput) => dispatch => {
    const data = {email: emailInput, password: passwordInput, businessName: nameInput};
    console.log(data);
    return fetch('/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then(data => {
      return dispatch(signup(data))
    }).catch(error => {
      return dispatch(signupError(error));
    });
};

export const SIGN_UP = 'SIGN_UP';
export const signup = (data) => ({
    type: SIGN_UP,
    email: data.username,
    id: data.id,
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
      console.log('hello');
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then(data => {
      console.log(data);
      return dispatch(login(data));
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

// Client Side Actions

export const CONNECT_TO_BUSINESS = 'CONNECT_TO_BUSINESS';
export const connectToBusiness = (currentConnection) => ({
    type: CONNECT_TO_BUSINESS,
    currentConnection: currentConnection
});

// Grab Menu List from Business

export const fetchMenu = (currentConnection) => dispatch => {
  // /dashboard/:id/drinks/:page
    return fetch(`/dashboard/${currentConnection}/drinks/0`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then(data => {
      dispatch(connectToBusiness(currentConnection));
      return dispatch(loadMenu(data))
    }).catch(error => {
      return dispatch(loadMenuError(error));
    });
};

export const LOAD_MENU = 'LOAD_MENU';
export const loadMenu = (data) => ({
    type: LOAD_MENU,
    data: data
});

export const LOAD_MENU_ERROR = 'LOAD_MENU_ERROR';
export const loadMenuError = (error) => ({
    type: LOAD_MENU_ERROR,
    error: error
});

// Send and receive Order Drink Actions

export const fetchOrders = (currentConnection) => dispatch => {
    return fetch(`/order/${currentConnection}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    }).then(data => {
      dispatch (fetchMenu(currentConnection));
      return dispatch(grabOrders(data))
    }).catch(error => {
      return dispatch(grabOrdersError(error));
    });
};

export const GRAB_ORDERS = 'GRAB_ORDERS';
export const grabOrders = (data) => ({
    type: GRAB_ORDERS,
    data: data
});

export const GRAB_ORDERS_ERROR = 'GRAB_ORDERS_ERROR';
export const grabOrdersError = (error) => ({
    type: GRAB_ORDERS_ERROR,
    error: error
});

export const submitOrder = (userNameInput, userEmailInput, userTableInput, orders, currentConnection) => dispatch => {
  let orderTotal = 0;
  orders.forEach((order) => {
    console.log(order);
    orderTotal += order.price;
  })
  const data = {clientName: userNameInput, table: userTableInput, clientEmail: userEmailInput, order: orders, totalDrinks: orders.length, orderTotal: orderTotal }
  console.log(data);
  console.log(data.orderTotal)
  return fetch(`/order/${currentConnection}`, {
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
    return dispatch(orderSuccess);
  }).catch(error => {
    return dispatch(orderFailure(error));
  });
};

export const ORDER_SUCCESS = 'ORDER_SUCCESS';
export const orderSuccess = () => ({
    type: ORDER_SUCCESS
});

export const ORDER_FAILURE = 'ORDER_FAILURE';
export const orderFailure = (error) => ({
    type: ORDER_FAILURE,
    error: error
});

export const ADD_ORDER = 'ADD_ORDER';
export const addOrder = (drinkName, price) => ({
    type: ADD_ORDER,
    drinkName: drinkName,
    price: price,
});

export const ADD_ORDER_ERROR = 'ADD_ORDER_ERROR';
export const addOrderError = (error) => ({
    type: ADD_ORDER_ERROR,
    error: error
});

// Pagination actions for menu list

export const PREVIOUS_MENU_PAGE = 'PREVIOUS_MENU_PAGE';
export const previousMenuPage = () => ({
    type: PREVIOUS_MENU_PAGE
});

export const NEXT_MENU_PAGE = 'NEXT_MENU_PAGE';
export const nextMenuPage = () => ({
    type: NEXT_MENU_PAGE
});

//business

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

export const PREVIOUS_ORDER_PAGE = 'PREVIOUS_ORDER_PAGE';
export const previousOrderPage = () => ({
    type: PREVIOUS_ORDER_PAGE
});

export const NEXT_ORDER_PAGE = 'NEXT_ORDER_PAGE';
export const nextOrderPage = () => ({
    type: NEXT_ORDER_PAGE
});

// Bussiness Order Actions

export const completeOrder = (orderId, currentConnection) => dispatch => {
    return fetch(`/order/${orderId}`, {
      method: 'DELETE'
    }).then(response => {
      console.log(response);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      dispatch(fetchOrders(currentConnection));
      return response.json();
    }).then(data => {
      console.log(data);
      return dispatch(drinkIsReady(data))
    }).catch(error => {
      return dispatch(drinkIsReadyError(error));
    });
};

export const DRINK_IS_READY = 'DRINK_IS_READY';
export const drinkIsReady = () => ({
    type: DRINK_IS_READY
});

export const DRINK_IS_READY_ERROR = 'DRINK_IS_READY_ERROR';
export const drinkIsReadyError = () => ({
    type: DRINK_IS_READY_ERROR
});
