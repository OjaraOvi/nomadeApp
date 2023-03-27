import React, { useEffect } from 'react';
import { SafeAreaView, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

// @ts-ignore
import { styles } from './styles';
import { ProductItem } from '../../components/index';
import { selectProduct, filterProducts } from '../../store/actions/index';

const Products = ({ navigation }) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const category = useSelector((state) => state.category.selected);
  // @ts-ignore
  const filteredProducts = useSelector((state) => state.products.filteredProducts);

  const onSelected = (item) => {
    dispatch(selectProduct(item.id));
    navigation.navigate('Detalle', {
      title: item.title,
    });
  };

  const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />;
  const keyExtractor = (item) => item.id.toString();
  useEffect(() => {
    dispatch(filterProducts(category.id));
  }, []);
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
