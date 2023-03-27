// @ts-ignore
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { THEME } from '../constants/themes/index';
import Cart from '../screens/cart/index';
import Location from '../screens/location/index';

const Stack = createNativeStackNavigator();
const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.colors.white,
        },
        headerTintColor: THEME.colors.primary,
        navigationBarColor: THEME.colors.secondary,
        headerTitleStyle: {
          fontFamily: 'Karma-Bold',
          fontSize: 18,
          color: THEME.colors.title,
        },
      }}>
      <Stack.Screen name="Carrito" component={Cart} />
      <Stack.Screen name="Ubicación" component={Location} />
    </Stack.Navigator>
  );
};

export default CartNavigator;
