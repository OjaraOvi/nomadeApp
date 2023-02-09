import { View, Text, Button, FlatList, SafeAreaView } from 'react-native';
import { CategoryItem } from '../../components/index';
import { CATEGORIES } from '../../constants/data/categories';
const Categoies = ({ navigation }) => {
  const onSelected = (item) => {
    navigation.navigate('Product', {
      categoryId: item.id,
      title: item.title,
    });
  };
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView>
      <FlatList data={CATEGORIES} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};
export default Categoies;
