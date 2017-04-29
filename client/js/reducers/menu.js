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

// when inputs in state no longer need a value be set to '';
const initialState = {
  menu: [],
  newDrinkName: '',
  newDrinkPrice: '',
  newDrinkIngredients: ''
}
// 58cffedf015af4d521e640bc

// constant reloading on business dashboard (needs to be fixed);

// afternoon Goals
// 1. CSS
// 2. Refactor
// 3. Squash bugs/find bugs

// Continue to polish app with css
// css mobile first, then tablet, then pc views // responsive design
// Refactor actions and reducers into seperate groups

///////////////////////////////////////////////
// Go over this with mentor // or add hacked version

// web socket library stuff
// socket.io for real time client to business orders;
// add socket.io for real time order feedback to client side

// authentication bonus

// version 1

// version 2:
// client profile
// client authenticaion
// business profile


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
    return

    default:
      return state;
  }
}
