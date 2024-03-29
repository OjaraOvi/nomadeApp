import { FlatList, SafeAreaView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { CategoryItem } from '../../components/index';
import { selectCategory } from '../../store/actions/category.action';
const Categoies = ({ navigation }) => {
  const dispatch = useDispatch();
  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Productos', {
      //  categoryId: item.id,
      title: item.title,
    });
  };
  // @ts-ignore
  const categories = useSelector((state) => state.category.categories);
  const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView>
      <FlatList data={categories} renderItem={renderItem} keyExtractor={keyExtractor} />
    </SafeAreaView>
  );
};
export default Categoies;
