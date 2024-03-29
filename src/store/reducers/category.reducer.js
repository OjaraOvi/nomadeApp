/* eslint-disable no-case-declarations */
import { CATEGORIES } from '../../constants/data/categories';
import { categoryType } from '../types/category.type';

const { SELECT_CATEGORY } = categoryType;

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY:
      const indexCategory = state.categories.findIndex(
        (category) => category.id === action.categoryID
      );

      if (indexCategory === -1) return state;

      return {
        ...state,
        selected: state.categories[indexCategory],
      };
    default:
      return state;
  }
};

export default categoryReducer;
