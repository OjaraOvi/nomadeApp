import { StyleSheet } from 'react-native';

import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    margin: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  headerContainer: {},
  header: {
    fontSize: 16,
    fontFamily: 'Bitter-Bold',
    color: COLORS.text,
    marginBottom: 5,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 14,
    fontFamily: 'Bitter-Medium',
    color: COLORS.text,
    marginBottom: 5,
  },
  content: {
    flex: 1,
  },
  price: {
    fontSize: 16,
    fontFamily: 'Bitter-Bold',
    color: COLORS.text,
    marginBottom: 5,
  },
});
