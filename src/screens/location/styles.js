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
});
