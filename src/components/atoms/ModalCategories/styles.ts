import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const ComponentStyles = () => {
  return StyleSheet.create({
    backView: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0, 0.5)',
      position: 'absolute',
      display: 'flex',
    },
    frontView: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    modalView: {
      backgroundColor: THEME.COLORS.CARD.BACKGROUND_THIRTY,
      width: 350,
      height: '100%',
      justifyContent: 'flex-start',
      padding: 10,
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      marginTop: 40,
    },
    textTitle: {
      color: THEME.COLORS.TEXT_DARK,
      fontSize: THEME.TEXT.MD,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    },
    textBody: {
      color: THEME.COLORS.TEXT_DARK,
      fontSize: THEME.TEXT.SM,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_BODY,
    },
    body: {
      justifyContent: 'flex-start',
    },
    containerFlatlist: {
      marginTop: 30,
      margin: 10,
      height: '70%',
      justifyContent: 'center',
    },
    form: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      color: THEME.COLORS.BACKGROUND_APP,
    },
  });
};
