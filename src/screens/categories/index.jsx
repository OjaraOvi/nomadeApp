import { View, Text, Button } from 'react-native';

const Categoies = ({ navigation }) => {
  return (
    <View>
      <Text>Category</Text>
      <Button title="ir a producto" onPress={() => navigation.navigate('Product')} />
    </View>
  );
};
export default Categoies;
