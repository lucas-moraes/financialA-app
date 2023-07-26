import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 40,
    marginTop: 10,
    backgroundColor: THEME.COLORS.RIGHT,
    padding: 5,
    borderRadius: 7,
    shadowColor: '#8f8c99',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  consultItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
