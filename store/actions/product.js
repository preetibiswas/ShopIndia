/* eslint-disable prettier/prettier */
export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const deleteProduct = productId => {
  return {
    type: DELETE_PRODUCT,
    pid: productId,
  };
};

export const createProduct = (title, description, imageUrl) => {
  return {
    type: CREATE_PRODUCT,
    prodData: {
      title,
      description,
      imageUrl,
      price,
    },
  };
};
export const updateProduct = (id, title, description, imageUrl, price) => {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    prodData: {
      title,
      description,
      imageUrl,
      price,
    },
  };
};
