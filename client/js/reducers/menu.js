import { LOAD_MENU,
         LOAD_MENU_ERROR,
         CREATE_DRINK,
         CREATE_DRINK_ERROR,
         DELETE_DRINK,
         DELETE_DRINK_ERROR,
         PROCESS_NEW_DRINK_NAME,
         PROCESS_NEW_DRINK_PRICE,
         PROCESS_NEW_DRINK_INGREDIENTS
       } from '../actions/menu';

const initialState = {
  menu: [],
  newDrinkName: '',
  newDrinkPrice: '',
  newDrinkIngredients: ''
};

export const menuReducer = (state=initialState, action) => {
  switch(action.type){
    case LOAD_MENU:
      return {...state, menu: action.data};

    case LOAD_MENU_ERROR:
      console.error(action.error);
      return state;

    case DELETE_DRINK:
      return state;

    case DELETE_DRINK_ERROR:
      console.error(action.error);
      return state;

    case PROCESS_NEW_DRINK_NAME:
      return {...state, newDrinkName: action.newDrinkName};

    case PROCESS_NEW_DRINK_PRICE:
      return {...state, newDrinkPrice: action.newDrinkPrice};

    case PROCESS_NEW_DRINK_INGREDIENTS:
      return {...state, newDrinkIngredients: action.newDrinkIngredients};

    case CREATE_DRINK:
    return state;

    default:
      return state;
  }
};
