/* eslint-disable prettier/prettier */
import {ADD_TO_CART, REMOVE_TO_CART} from '../actions/cart';
import {ADD_ORDER} from '../actions/order';
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
    case REMOVE_TO_CART:
      const selectedCartItem = state.items[action.pId];
      const currentQuantity = selectedCartItem.quantity;
      let updatedCartItems;
      if (currentQuantity > 1) {
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.productPrice,
          selectedCartItem.productTitle,
          selectedCartItem.sum - selectedCartItem.productPrice,
        );
        updatedCartItems = {...state.items, [action.pId]: updatedCartItem};
      } else {
        updatedCartItems = {...state.items};
        delete updatedCartItems[action.pId];
      }

      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.productPrice,
      };

    case ADD_ORDER:
      return initialState;

    default:
      return state; // Add this default case
  }
};
