// @ts-ignore
import { useFocusEffect } from '@react-navigation/native';
import { View, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import OrderItem from '../../components/order-item/index';
import { styles } from './styles';
import { useCallback, useEffect } from 'react';
import { getOrders } from '../../store/actions/orders.actions';

const Orders = ({ navigation }) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const orders = useSelector((state) => state.orders.list);
  // @ts-ignore
  const loading = useSelector((state) => state.orders.loading);
  // @ts-ignore
  const error = useSelector((state) => state.orders.error);
  const onDelete = (id) => {
    //dispatch(deleteOrder(id));
  };

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const renderItem = ({ item }) => <OrderItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();
  return (
    <View style={styles.container}>
      <FlatList data={orders} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Orders;
