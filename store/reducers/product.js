/* eslint-disable prettier/prettier */
import PRODUCTS from '../../modal/dummy-data';
import {DELETE_PRODUCT} from '../actions/product';
const initialstate = {
  availableProduct: PRODUCTS,
  userProduct: PRODUCTS.filter(item => item.ownerId === 'u1'),
};

export default (state = initialstate, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProduct: state.userProduct.filter(
          product => product.id !== action.pid,
        ),
        availableProduct: state.availableProduct.filter(
          product => product.id !== action.pid,
        ),
      };
  }

  return state;
};
