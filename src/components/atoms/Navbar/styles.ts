import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    marginTop: 30,
    padding: 5,
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: THEME.COLORS.BACKGROUND_APP,
  },
  text: {
    fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    fontSize: THEME.TEXT.LG,
    color: THEME.COLORS.TEXT_LIGHT,
  },
});
