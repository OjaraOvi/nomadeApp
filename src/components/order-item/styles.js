import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/themes/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 90,
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
  date: {
    fontSize: 16,
    fontFamily: 'Bitter-Regular',
    color: COLORS.text,
  },
  contentContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {},
  total: {
    fontSize: 16,
    fontFamily: 'Bitter-Bold',
  },
});
