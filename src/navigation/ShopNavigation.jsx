// @ts-ignore
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import Login from '../screens/login/index';
import NewOrder from '../screens/new-order/index';
import SignUp from '../screens/sign-up/index';
import Categories from '../screens/categories/index';
import Products from '../screens/products/index';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Category">
      <Stack.Screen name="Category" component={Categories} />
      <Stack.Screen name="Product" component={Products} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={SignUp} />
      <Stack.Screen name="Pedido" component={NewOrder} />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
