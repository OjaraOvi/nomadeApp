// @ts-ignore
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, TouchableOpacity } from 'react-native';

// @ts-ignore
import { styles } from './styles';
import { formatDate } from '../../utils/functions/index';
import { COLORS } from '../../constants/themes/colors';

const OrderItem = ({ item, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.date}>{formatDate(item.date)}</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={styles.total}>${item.total}</Text>
        </View>
        <TouchableOpacity onPress={() => onDelete(item.id)}>
          <Ionicons name="trash" size={22} color={COLORS.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
