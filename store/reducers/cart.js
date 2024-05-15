/* eslint-disable prettier/prettier */
import {ADD_TO_CART} from '../actions/cart';
import CartItem from '../../modal/cartI-item';
const initialState = {
  items: {},
  totalAmount: 0,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const ProPrice = addedProduct.Price;
      const ProdTitle = addedProduct.title;
      if (state.items[addedProduct.id]) {
        const updatedCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          ProPrice,
          ProdTitle,
          state.items[addedProduct.id].sum + ProPrice,
        );
        return {
          ...state,
          items: {...state.items, [addedProduct.id]: updatedCartItem},
          totalAmount: state.totalAmount + ProPrice,
        };
      } else {
        const newCartItem = new CartItem(1, ProPrice, ProdTitle, ProPrice);
        return {
          ...state,
          items: {...state.items, [addedProduct.id]: newCartItem},
          totalAmount: state.totalAmount + ProPrice,
        };
      }
    default:
      return state; // Add this default case
  }
};
