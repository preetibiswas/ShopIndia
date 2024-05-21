/* eslint-disable prettier/prettier */
import PRODUCTS from '../../modal/dummy-data';
import Product from '../../modal/product';
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from '../actions/product';

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
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        'u1',
        action.prodData.title,
        action.prodData.imageUrl,
        action.prodData.description,
        action.prodData.price,
      );
      return {
        ...state,
        availableProduct: state.availableProduct.concat(newProduct),
        userProduct: state.userProduct.concat(newProduct),
      };
    case UPDATE_PRODUCT:
      const productIndex = state.userProduct.findIndex(
        item => item.id === action.pid,
      );
      const updateProduct = new Product(
        action.pid,
        state.userProduct[productIndex].ownerId,
        action.prodData.title,
        action.prodData.imageUrl,
        action.prodData.description,

        state.userProduct[productIndex].Price,
      );
      const updatedUserProduct = [...state.userProduct];
      updatedUserProduct[productIndex] = updateProduct;

      const availabelProductIndex = state.availableProduct.findIndex(
        item => item.id === action.pid,
      );
      const updatedAvailabelProduct = [...state.availableProduct];
      updatedAvailabelProduct[availabelProductIndex] = updateProduct;
      return {
        ...state,
        availableProduct: updatedAvailabelProduct,
        userProduct: updatedUserProduct,
      };
  }

  return state;
};
