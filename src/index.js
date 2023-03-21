// @ts-nocheck
import { useFonts } from 'expo-font';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { init } from './db';

import AppNavigator from './navigation';
import { Provider } from 'react-redux';
import store from './store/index';

init()
  .then(() => {
    console.log('Initializing database');
  })
  .catch((err) => {
    console.log('Initializing db failed');
    console.log(err);
  });

const App = () => {
  const [loaded] = useFonts({
    'Karma-Regular': require('../assets/fonts/Karma-Regular.ttf'),
    'Karma-Light': require('../assets/fonts/Karma-Light.ttf'),
    'Karma-Bold': require('../assets/fonts/Karma-Bold.ttf'),
    'Karma-Medium': require('../assets/fonts/Karma-Medium.ttf'),
    'Karma-SemiBold': require('../assets/fonts/Karma-SemiBold.ttf'),
  });
  /*
  const hijoAPadre = (datoshijo) => {
    setUser(datoshijo);
  };

  const Content = () => (user ? <NewOrder /> : <SignUp hijoAPadre={hijoAPadre} />);
*/
  if (!loaded)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
