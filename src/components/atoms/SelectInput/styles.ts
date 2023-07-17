import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.BACKGROUND_APP,
    borderRadius: 5,
  },
  input: {
    color: THEME.COLORS.TEXT_DARK,
    fontSize: THEME.TEXT.SM,
  },
});
