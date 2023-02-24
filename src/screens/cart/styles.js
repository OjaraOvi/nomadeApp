import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  footer: {
    backgroundColor: COLORS.white,
    borderTopColor: COLORS.primary,
    borderTopWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  buttonConfirm: {
    backgroundColor: COLORS.primary,
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonConfirmText: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: 'Bitter-Medium',
  },
  totalContainer: {
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalText: {
    color: COLORS.white,
    fontSize: 14,
    fontFamily: 'Bitter-Medium',
  },
  totalPrice: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: 'Bitter-Bold',
  },
  header: {
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontFamily: 'Bitter-Bold',
    fontSize: 18,
  },
});
