import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.BACKGROUND_APP,
    color: THEME.COLORS.TEXT_DARK,
    borderRadius: 5,
    height: 40,
    fontSize: THEME.TEXT.SM,
  },
  container: {
    margin: 5,
  },
});
