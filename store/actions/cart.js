/* eslint-disable prettier/prettier */
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_TO_CART = 'REMOVE_TO_CART';

export const addtoCart = product => {
  return {
    type: ADD_TO_CART,
    product: product,
  };
};
export const removetocart = productId => {
  return {
    type: REMOVE_TO_CART,
    pId: productId,
  };
};
