import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const ComponentStyles = (context: string) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      width: '100%',
      height: `${context === 'month' ? '90%' : '100%'}`,
      position: 'absolute',
      backgroundColor: `${
        context === 'month' ? THEME.COLORS.CARD.BACKGROUND_PRIMARY : THEME.COLORS.CARD.BACKGROUND_SECUNDARY
      }`,
      borderTopColor: THEME.COLORS.CARD.BORDER,
      borderTopWidth: 1,
      borderStartColor: THEME.COLORS.CARD.BORDER,
      borderStartWidth: 1,
      borderEndColor: THEME.COLORS.CARD.BORDER,
      borderEndWidth: 1,
      borderTopStartRadius: 20,
      borderTopEndRadius: 20,
      padding: 10,
      marginTop: 20,
      paddingBottom: 90,
    },
    textTitle: {
      color: THEME.COLORS.TEXT_DARK,
      fontSize: THEME.TEXT.MD,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    },
    header: {
      flexDirection: 'row',
      borderBottomColor: THEME.COLORS.TABLE,
      borderBottomWidth: 1,
    },
    headerTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 10,
      marginLeft: 10,
      marginRight: 5,
    },
    headerDelete: {
      width: 30,
      textAlign: 'left',
      color: THEME.COLORS.TEXT_DARK,
      fontSize: THEME.TEXT.SM,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    },
    headerDate: {
      width: 70,
      fontSize: THEME.TEXT.SM,
      color: THEME.COLORS.TEXT_DARK,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    },
    headerEdit: {
      width: 30,
      textAlign: 'center',
      fontSize: THEME.TEXT.SM,
      color: THEME.COLORS.TEXT_DARK,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    },
    headerCategory: {
      flex: 1,
      fontSize: THEME.TEXT.SM,
      color: THEME.COLORS.TEXT_DARK,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    },
    headerValue: {
      fontSize: THEME.TEXT.SM,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
      color: THEME.COLORS.TEXT_DARK,
      flex: 1,
      maxWidth: 70,
      textAlign: 'right',
    },
    headerStatus: {
      width: 20,
      marginLeft: 5,
      textAlign: 'center',
      color: THEME.COLORS.TEXT_DARK,
    },
    table: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 40,
      marginTop: 5,
      paddingTop: 5,
      borderRadius: 10,
      marginBottom: 5,
      color: THEME.COLORS.TEXT_DARK,
    },
    date: {
      width: 75,
      color: THEME.COLORS.TEXT_DARK,
    },
    options: {
      width: 60,
      flexDirection: 'row',
      justifyContent: 'space-between',
      color: THEME.COLORS.TEXT_DARK,
    },
    category: {
      flex: 1,
      color: THEME.COLORS.TEXT_DARK,
    },
    value: {
      width: 80,
      textAlign: 'right',
      color: THEME.COLORS.TEXT_DARK,
    },
    status: {
      width: 20,
      marginLeft: 5,
      textAlign: 'center',
      color: THEME.COLORS.TEXT_DARK,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
      borderTopColor: THEME.COLORS.TABLE,
      color: THEME.COLORS.TEXT_DARK,
      borderTopWidth: 1,
      marginTop: 10,
    },
    sumary: {
      color: THEME.COLORS.TEXT_DARK,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: THEME.COLORS.BACKGROUND_APP,
    },
    buttons: {
      width: 25,
      justifyContent: 'flex-start',
      marginRight: 5,
    },
  });
};
