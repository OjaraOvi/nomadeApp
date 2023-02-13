import React from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
// @ts-ignore
import { styles } from './styles';
import { ProductItem } from '../../components/index';
import { PRODUCTS } from '../../constants/data/index';

const Products = ({ navigation, route }) => {
  //const { categoryId, title } = route.params;
  const category = useSelector((state) => state.category.selected);

  //console.warn(title, categoryId);

  const filteredProducts = PRODUCTS.filter((product) => product.categoryId === category.id);

  const onSelected = (item) => {
    navigation.navigate('ProductDetail', {
      productId: item.id,
      title: item.title,
    });
  };

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredProducts}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.contentList}
      />
    </SafeAreaView>
  );
};

export default Products;
