import { createStore, combineReducers } from 'redux';

// @ts-ignore
import { categoryReducer, productReducer } from './reducers';

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
});

export default createStore(rootReducer);
