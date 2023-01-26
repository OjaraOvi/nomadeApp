import { View, Text, TextInput, Button } from "react-native";

const SignUp = ({ hijoAPadre }) => {
  const user = 1;
  return (
    <View>
      <Text>Hello I am Sign up</Text>
      <TextInput placeholder="correo" />
      <TextInput placeholder="usuario" />
      <Button title="registrar" onPress={() => hijoAPadre(user)} />
    </View>
  );
};

export default SignUp;
