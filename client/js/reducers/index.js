
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

export default (state=initialState, action) => {
        return state;
    }
