import { createStore, combineReducers, applyMiddleware } from 'redux';
// @ts-ignore
import thunk from 'redux-thunk';

// @ts-ignore
import { categoryReducer, productReducer, cartReducer } from './reducers';
import ordersReducer from './reducers/orders.reducer';

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
