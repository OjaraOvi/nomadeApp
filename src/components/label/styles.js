import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Bitter-Regular',
    marginVertical: 5,
    color: COLORS.text,
  },
  sublabel: {
    fontSize: 12,
    fontFamily: 'Bitter-Regular',
    color: COLORS.gray,
    marginVertical: 5,
  },
});
