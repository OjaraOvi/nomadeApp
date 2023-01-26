import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import NewOrder from "./screens/new-order/index";
import SignUp from "./screens/sign-up/index";

export default function App() {
  const [user, setUser] = useState("");

  const hijoAPadre = (datoshijo) => {
    setUser(datoshijo);
  };

  const Content = () =>
    user ? <NewOrder /> : <SignUp hijoAPadre={hijoAPadre} />;

  return (
    <View style={styles.container}>
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
