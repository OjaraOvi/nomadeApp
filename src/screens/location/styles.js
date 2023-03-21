import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  preview: {
    width: '100%',
    height: 180,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: COLORS.primary,
    borderWidth: 1,
  },
});
