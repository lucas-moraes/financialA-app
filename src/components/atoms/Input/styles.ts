import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  text: {
    margin: 5,
    padding: 5,
    height: 40,
    borderBottomWidth: 1,
    borderBottomColor: THEME.COLORS.BACKGROUND_APP,
    fontSize: THEME.TEXT.SM,
    color: THEME.COLORS.TEXT_DARK,
    borderRadius: 5,
  },
});
