import { GRAB_ORDERS,
         GRAB_ORDERS_ERROR,
         ORDER_SUCCESS,
         ORDER_FAILURE,
         REMOVE_ORDER,
         REMOVE_ORDER_ERROR,
         ADD_ORDER,
         ADD_ORDER_ERROR,
         DRINK_IS_READY,
         DRINK_IS_READY_ERROR
       } from '../actions/order';

const initialState = {
 orders: [],
 currentOrder: [],
};

export const orderReducer = (state=initialState, action) => {
  switch(action.type){

    case GRAB_ORDERS:
      return {...state, orders: action.data};

    case GRAB_ORDERS_ERROR:
      console.error(action.error);
      return state;

    case ADD_ORDER:
      const currentOrder = state.currentOrder.slice();
      currentOrder.push({drinkName: action.drinkName, price: action.price});
      return {...state, currentOrder: currentOrder};

    case ADD_ORDER_ERROR:
      console.error(action.error);
      return state;

    case REMOVE_ORDER:
      const currentOrderRemoval = state.currentOrder.slice();
      currentOrderRemoval.splice(action.id, 1);
      return {...state, currentOrder: currentOrderRemoval};

    case REMOVE_ORDER_ERROR:
      console.error(action.error);
      return state;

    case ORDER_SUCCESS:
      return {...state, currentOrder: []};

    case ORDER_FAILURE:
      console.error(action.error);
      return state;

    case DRINK_IS_READY:
      return state;

    case DRINK_IS_READY_ERROR:
      console.error(action.error);
      return state;

    default:
    return state;
  }
};
