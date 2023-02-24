// @ts-ignore
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import { THEME } from '../constants/themes/index';
import Categories from '../screens/categories/index';
import ProductDetail from '../screens/details/index';
import Login from '../screens/login/index';
//import NewOrder from '../screens/new-order/index';
import Products from '../screens/products/index';
import SignUp from '../screens/sign-up/index';

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Category"
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
      <Stack.Screen name="Category" component={Categories} />
      <Stack.Screen
        name="Product"
        component={Products}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen
        name="Detail"
        component={ProductDetail}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={SignUp} />
    </Stack.Navigator>
  );
};

export default ShopNavigator;
