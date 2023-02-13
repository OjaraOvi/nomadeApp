import { categoryType } from '../types/category.type';

const { SELECT_CATEGORY } = categoryType;

export const selectCategory = (id) => ({
  type: SELECT_CATEGORY,
  categoryID: id,
});
