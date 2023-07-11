import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    margin: 8,
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.BACKGROUND_APP,
  },
  text: {
    fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    fontSize: THEME.TEXT.LG,
    color: THEME.COLORS.TEXT_LIGHT,
  },
});
