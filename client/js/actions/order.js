import {fetchMenu} from './menu';
import 'isomorphic-fetch';
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
    orderTotal += order.price;
  })
  const data = {clientName: userNameInput, table: userTableInput, clientEmail: userEmailInput, order: orders, totalDrinks: orders.length, orderTotal: orderTotal }
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
    return dispatch(orderSuccess());
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

export const REMOVE_ORDER = 'REMOVE_ORDER';
export const removeOrder = (id) => ({
    type: REMOVE_ORDER,
    id: id
});

export const REMOVE_ORDER_ERROR = 'REMOVE_ORDER_ERROR';
export const removeOrderError = (error) => ({
    type: REMOVE_ORDER_ERROR,
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

//business

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
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      dispatch(fetchOrders(currentConnection));
      return response.json();
    }).then(data => {
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
