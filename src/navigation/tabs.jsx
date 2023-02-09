// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';
// @ts-ignore
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ShopNavigator from './ShopNavigation';
import CartNavigator from './cart';
import OrdersNavigator from './orders';
import { THEME } from '../constants/themes/index';

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="ShopTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'Karma-Regular',
          fontSize: 12,
        },
        tabBarActiveTintColor: THEME.colors.primary,
        tabBarInactiveTintColor: THEME.colors.gray,
      }}>
      <BottomTab.Screen
        name="ShopTab"
        component={ShopNavigator}
        options={{
          title: 'Shop',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="OrdersTab"
        component={OrdersNavigator}
        options={{
          title: 'Orders',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'file-tray' : 'file-tray-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          title: 'Cart',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'cart' : 'cart-outline'}
              size={22}
              color={THEME.colors.primary}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default TabsNavigator;
