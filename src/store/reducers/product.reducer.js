import { PRODUCTS } from '../../constants/data/products';
import { productsType } from '../types/products.type';

const { FILTER_PRODUCTS, SELECT_PRODUCT } = productsType;
const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selected: null,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT: {
      return {
        ...state,
        selected: state.products.find((product) => product.id === action.productId),
      };
    }
    case FILTER_PRODUCTS: {
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.categoryId === action.categoryId
        ),
      };
    }
    default:
      return state;
  }
};

export default productReducer;
