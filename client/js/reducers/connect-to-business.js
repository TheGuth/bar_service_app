import { BUSINESS_INFO_SUCCESS,
         BUSINESS_INFO_ERROR,
         CONNECT_TO_BUSINESS,
       } from '../actions/connect-to-business';

const initialState = {
 businessName: '',
 currentConnection: '',
}

export const connectToBusinessReducer = (state=initialState, action) => {
    switch(action.type){
      case BUSINESS_INFO_SUCCESS:
        return {...state, businessName: action.data.businessName};

      case BUSINESS_INFO_ERROR:
        console.error(action.error)
        return state;

      case CONNECT_TO_BUSINESS:
        return {...state, currentConnection: action.currentConnection};

      default:
      return state;
  }
}
