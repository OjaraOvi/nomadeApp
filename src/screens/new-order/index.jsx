/*
import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { CustomModal } from '../../components/index';
import { styles } from './styles';

const NewOrder = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onHandlerModalNewOrder = () => {
    setIsModalVisible(!isModalVisible);
  };

  const onHandleCancel = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View>
      <Text style={styles.sigupTitle}>Nuevo Pedido</Text>
      <Button title="Nuevo" onPress={onHandlerModalNewOrder} />
      <CustomModal isModalVisible={isModalVisible} onHandleCancel={onHandleCancel} />
    </View>
  );
};

export default NewOrder;
*/
