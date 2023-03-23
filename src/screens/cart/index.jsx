import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { styles } from './styles';
import CartItem from '../../components/cart-item/index';
import { confirmOrder, remoreFromCart } from '../../store/actions/index';

const Cart = ({ navigation }) => {
  const dispatch = useDispatch();
  // @ts-ignore
  const cart = useSelector((state) => state.cart.items);

  // @ts-ignore
  const total = useSelector((state) => state.cart.total);
  const onDelete = (id) => {
    //  dispatch(remoreFromCart(id));
  };
  const onCreateOrder = () => {
    dispatch(confirmOrder(cart, total));
    navigation.navigate('Location', {
      //  categoryId: item.id,
      //title: item.title,
    });
  };
  const renderItem = ({ item }) => <CartItem item={item} onDelete={onDelete} />;
  const keyExtractor = (item) => item.id.toString();
  const Header = () =>
    cart.length <= 0 && (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Cart is empty</Text>
      </View>
    );
  const Footer = () =>
    cart.length > 0 && (
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonConfirm} onPress={onCreateOrder}>
          <Text style={styles.buttonConfirmText}>Confirm</Text>
          <View style={styles.totalContainer}>
            <Text style={styles.totalText}>Total:</Text>
            <Text style={styles.totalPrice}>${total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Header />

        <FlatList
          data={cart}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          style={styles.listContainer}
        />
      </View>
      <Footer />
    </View>
  );
};

export default Cart;
