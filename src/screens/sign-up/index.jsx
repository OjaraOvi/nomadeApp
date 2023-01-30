import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const SignUp = ({ hijoAPadre }) => {
  const user = 1;
  return (
    <View>
      <Text style={styles.title}>Registro</Text>
      <TextInput placeholder="Correo" />
      <TextInput placeholder="Usuario" />
      <Button title="registrar" onPress={() => hijoAPadre(user)} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Karma-Bold",
    fontSize: 20,
  },
});

export default SignUp;
