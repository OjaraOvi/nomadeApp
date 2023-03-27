import { REALTIME_DATABASE_URL } from '../../constants/firebase/index';
import { cartType } from '../types/cart.types';

const { ADD_TO_CART, CONFIRM_ORDER, REMOVE_FROM_CART, EMPTY_CART } = cartType;

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const remoreFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  id,
});

export const emptyCart = (items, total) => ({
  type: EMPTY_CART,
  items,
  total,
});

export const confirmOrder = (items, total) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${REALTIME_DATABASE_URL}/orders.json`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: Date.now(),
          items,
          total,
        }),
      });

      const result = await response.json();

      dispatch({
        type: CONFIRM_ORDER,
        result,
      });
    } catch (error) {
      dispatch({
        type: CONFIRM_ORDER,
        error,
      });
    }
  };
};
