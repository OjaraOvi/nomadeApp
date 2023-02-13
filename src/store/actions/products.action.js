import { productsType } from '../types/products.type';

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productsType;

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});

export const filterProducts = (id) => ({
  type: FILTER_PRODUCTS,
  categoryId: id,
});
