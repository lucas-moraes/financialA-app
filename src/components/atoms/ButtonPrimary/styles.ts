import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  button: {
    margin: 5,
    marginTop: 30,
    padding: 5,
    height: 40,
    backgroundColor: THEME.COLORS.BACKGROUND_APP,
    fontSize: THEME.TEXT.SM,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: THEME.COLORS.TEXT_LIGHT,
  },
});
