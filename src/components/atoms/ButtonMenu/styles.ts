import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  button: {
    height: 40,
    paddingLeft: 20,
    marginTop: 10,
    alignItems: 'flex-start',
    // borderTopColor: THEME.COLORS.BACKGROUND_APP,
    // borderTopWidth: 1,
    // borderBottomColor: THEME.COLORS.BACKGROUND_APP,
    // borderBottomWidth: 1,
    backgroundColor: THEME.COLORS.BOTTOM_MENU,
  },
  text: {
    height: '100%',
    fontSize: THEME.TEXT.SM,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: THEME.COLORS.TEXT_DARK,
  },
});
