import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const ComponentStyles = (context: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: `${context === 'year' ? '90%' : '100%'}`,
      position: 'absolute',
      backgroundColor: `${
        context === 'year' ? THEME.COLORS.CARD.BACKGROUND_PRIMARY : THEME.COLORS.CARD.BACKGROUND_SECUNDARY
      }`,
      borderTopColor: THEME.COLORS.CARD.BORDER,
      borderTopWidth: 1,
      borderStartColor: THEME.COLORS.CARD.BORDER,
      borderStartWidth: 1,
      borderEndColor: THEME.COLORS.CARD.BORDER,
      borderEndWidth: 1,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      padding: 20,
      marginTop: 10,
    },
    textTitle: {
      color: THEME.COLORS.TEXT_DARK,
      fontSize: THEME.TEXT.MD,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
      marginBottom: 30,
    },
    header: {
      flexDirection: 'row',
      borderBottomColor: THEME.COLORS.TABLE,
      borderBottomWidth: 1,
      marginBottom: 10,
    },
    headerDescription: {
      flex: 1,
      fontSize: THEME.TEXT.SM,
    },
    headerValue: {
      fontSize: THEME.TEXT.SM,
      flex: 1,
      maxWidth: 70,
      textAlign: 'right',
    },
    table: {
      flexDirection: 'row',
    },
    description: {
      flex: 1,
    },
    value: {
      flex: 1,
      maxWidth: 90,
      textAlign: 'right',
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      borderTopColor: THEME.COLORS.TABLE,
      borderTopWidth: 1,
      marginTop: 10,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: THEME.COLORS.BACKGROUND_APP,
    },
  });
};
