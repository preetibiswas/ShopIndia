/* eslint-disable prettier/prettier */
export const ADD_TO_CART = 'ADD_TO_CART';

export const addtoCart = product => {
  return {
    type: ADD_TO_CART,
    product: product,
  };
};
