// @ts-nocheck
import React, { useState, useEffect } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import NewOrder from "./screens/new-order/index";
import SignUp from "./screens/sign-up/index";
import { useFonts } from "expo-font";
import { Font } from "expo";

const App = () => {
  const [user, setUser] = useState("");
  const [loaded] = useFonts({
    "Karma-Regular": require("../assets/fonts/Karma-Regular.ttf"),
    "Karma-Light": require("../assets/fonts/Karma-Light.ttf"),
    "Karma-Bold": require("../assets/fonts/Karma-Bold.ttf"),
    "Karma-Medium": require("../assets/fonts/Karma-Medium.ttf"),
    "Karma-SemiBold": require("../assets/fonts/Karma-SemiBold.ttf"),
  });

  const hijoAPadre = (datoshijo) => {
    setUser(datoshijo);
  };

  const Content = () =>
    user ? <NewOrder /> : <SignUp hijoAPadre={hijoAPadre} />;

  if (!loaded)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );

  return (
    <View style={styles.container}>
      <Content />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
