export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const CHANGE_QUANTITY_ITEM = 'CHANGE_QUANTITY_ITEM';

export const addProductToCart = data => {
  return {
    type: ADD_TO_CART,
    value: data
  };
};

export const removeProductToCart = data => {
  return {
    type: REMOVE_FROM_CART,
    value: data
  };
};

export const changeQuantity = data => {
  return {
    type: CHANGE_QUANTITY_ITEM,
    value: data
  };
};