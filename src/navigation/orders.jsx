// @ts-ignore
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { THEME } from '../constants/themes/index';
import Orders from '../screens/orders/index';

const Stack = createNativeStackNavigator();
const OrdersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Orders"
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
      <Stack.Screen name="Pedidos" component={Orders} />
    </Stack.Navigator>
  );
};

export default OrdersNavigator;
