/* eslint-disable prettier/prettier */
export const ADD_ORDER = 'ADD_ORDER';

export const addorder = (cartitem, totalAmount) => {
  console.log('cartitem', cartitem);
  return {
    type: ADD_ORDER,
    orderData: {items: cartitem, amount: totalAmount},
  };
};
