import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignUp = () => {
  return (
    <View>
      <Text style={styles.title}>Registro</Text>
      <TextInput placeholder="Correo" />
      <TextInput placeholder="Usuario" />
      <Button title="registrar" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Karma-Bold',
    fontSize: 20,
  },
});

export default SignUp;
