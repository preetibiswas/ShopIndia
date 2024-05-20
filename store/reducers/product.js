/* eslint-disable prettier/prettier */
import PRODUCTS from '../../modal/dummy-data';
const initialstate = {
  availableProduct: PRODUCTS,
  userProduct: PRODUCTS.filter(item => item.ownerId === 'u1'),
};

export default (state = initialstate, action) => {
  return state;
};
