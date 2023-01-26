import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { CustomModal } from "./component";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onHandlerModalNewOrder = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text>Nuevo Pedido</Text>
      <Button title="Nuevo" onPress={onHandlerModalNewOrder} />
      <CustomModal
        isModalVisible={isModalVisible}
        onHandleCancel={onHandleCancel}
      />
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
