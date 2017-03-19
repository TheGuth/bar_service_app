
import * as actions from '../actions/actions';


const initialState = {
  client: {
    id: null,
    name: '',
    email: '',
    orderHistory: [],
    menu: [],
    orderStatus: null,
    orderingFrom: ''
  },
  business: {
    id: null,
    name: '',
    email: '',
    menu: [],
    orderQueue: [],
    orderHistory: []
  },
  business: false,
};

export const reducer = (state=initialState, action) => {
  switch(action.type){

    case actions.SIGNUP:
      return state;

    case actions.LOGIN:
      return state;

    default:
      return state;
  }
}
