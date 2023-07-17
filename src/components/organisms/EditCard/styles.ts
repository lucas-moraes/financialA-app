import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const ComponentStyles = () => {
  return StyleSheet.create({
    containerBack: {
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      position: 'absolute',
      backgroundColor: 'rgba(0,0,0, 0.5)',
      height: '100%',
      width: '100%',
      alignItems: 'baseline',
    },
    container: {
      width: '100%',
      position: 'absolute',
      backgroundColor: THEME.COLORS.CARD.BACKGROUND_THIRTY,
      borderTopColor: THEME.COLORS.CARD.BORDER,
      borderTopWidth: 1,
      borderStartColor: THEME.COLORS.CARD.BORDER,
      borderStartWidth: 1,
      borderEndColor: THEME.COLORS.CARD.BORDER,
      borderEndWidth: 1,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      padding: 20,
      bottom: 0,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: -20,
      },
      shadowOpacity: 1,
      shadowRadius: 20,

      elevation: 20,
    },
    textTitle: {
      color: THEME.COLORS.TEXT_DARK,
      fontSize: THEME.TEXT.MD,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    body: {
      marginTop: 30,
    },
  });
};
