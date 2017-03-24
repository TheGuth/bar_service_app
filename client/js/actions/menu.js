import { retrieveBusinessInfo,
         connectToBusiness
       } from './connect-to-business';
import {fetchOrders} from './order';

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

      dispatch(retrieveBusinessInfo(currentConnection));
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

//Create, delete drinks from menu

export const addDrinkToMenu = (currentConnection, newDrinkName, newDrinkPrice, newDrinkIngredients,) => dispatch => {
    const data = {drinkName: newDrinkName, price: newDrinkPrice, ingredients: newDrinkIngredients};
    console.log(data);
    return fetch(`/dashboard/${currentConnection}/drinks`, {
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
      dispatch(fetchOrders(currentConnection));
      dispatch(fetchMenu(currentConnection));
      return dispatch(createDrink(data));
    }).catch(error => {
      return dispatch(createDrinkError(error));
    });
};

export const CREATE_DRINK = 'CREATE_DRINK';
export const createDrink = (data) => ({
    type: CREATE_DRINK,
    drinkName: data.drinkName,
    price: data.price,
    ingredients: data.ingredients
});

export const CREATE_DRINK_ERROR = 'CREATE_DRINK_ERROR';
export const createDrinkError = () => ({
    type: CREATE_DRINK_ERROR
});

export const deleteDrinkFromMenu = (drinkId, currentConnection) => dispatch => {
  return fetch(`/dashboard/${currentConnection}/drinks/${drinkId}`, {
    method: 'DELETE'
  }).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
     }
     dispatch(fetchMenu(currentConnection));
     return response.json();
   }).then(data => {
     return dispatch(deleteDrink(data));
   }).catch(error => {
     return dispatch(deleteDrinkError(error));
  });

};

export const DELETE_DRINK = 'DELETE_DRINK';
export const deleteDrink = () => ({
    type: DELETE_DRINK
});

export const DELETE_DRINK_ERROR = 'DELETE_DRINK_ERROR';
export const deleteDrinkError = () => ({
    type: DELETE_DRINK_ERROR
});

export const UPDATE_DRINK = 'UPDATE_DRINK';
export const updateDrink = () => ({
    type: UPDATE_DRINK
});

//Processing new drink

export const PROCESS_NEW_DRINK_NAME = 'PROCESS_NEW_DRINK_NAME';
export const processNewDrinkName = (newDrinkName) => ({
  type: PROCESS_NEW_DRINK_NAME,
  newDrinkName: newDrinkName
});

export const PROCESS_NEW_DRINK_PRICE = 'PROCESS_NEW_DRINK_PRICE';
export const processNewDrinkPrice = (newDrinkPrice) => ({
  type: PROCESS_NEW_DRINK_PRICE,
  newDrinkPrice: newDrinkPrice
});

export const PROCESS_NEW_DRINK_INGREDIENTS = 'PROCESS_NEW_DRINK_INGREDIENTS';
export const processNewDrinkIngredients = (newDrinkIngredients) => ({
  type: PROCESS_NEW_DRINK_INGREDIENTS,
  newDrinkIngredients: newDrinkIngredients
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
