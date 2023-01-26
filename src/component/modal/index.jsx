import { View, Modal, Text, Button } from "react-native";
import { styles } from "./styles";
const CustomModal = ({ isModalVisible, onHandleCancel }) => {
  return (
    <Modal visible={isModalVisible} animationType="slide">
      <View style={styles.modalContainer}>
        <Text>Nuevo Pedido</Text>
        <Button title="agregar" />
        <Button title="cancelar" onPress={onHandleCancel} />
      </View>
    </Modal>
  );
};

export default CustomModal;
