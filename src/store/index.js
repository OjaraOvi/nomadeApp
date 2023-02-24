import { createStore, combineReducers, applyMiddleware } from 'redux';
// @ts-ignore
import thunk from 'redux-thunk';

// @ts-ignore
import { categoryReducer, productReducer, cartReducer } from './reducers';

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
