// @ts-ignore
import { NavigationContainer } from '@react-navigation/native';

import ShopNavigation from './ShopNavigation';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <ShopNavigation />
    </NavigationContainer>
  );
};

export default AppNavigator;
