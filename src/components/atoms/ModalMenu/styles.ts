import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';
import { useStore } from '../../../store/useStore';

export const ComponentStyles = () => {
  const { toChoose } = useStore();
  return StyleSheet.create({
    backView: {
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0,0,0, 0.5)',
      position: 'absolute',
      display: `${toChoose ? 'flex' : 'none'}`,
    },
    frontView: {
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
    modalView: {
      backgroundColor: THEME.COLORS.CARD.BACKGROUND_THIRTY,
      width: 250,
      height: '100%',
      justifyContent: 'flex-start',
      padding: 10,
    },
    header: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
      marginTop: 45,
    },
    textTitle: {
      color: THEME.COLORS.TEXT_DARK,
      fontSize: THEME.TEXT.MD,
      fontFamily: THEME.TEXT.FONT_FAMILY.TEXT_TITLE,
    },
    body: {
      justifyContent: 'center',
    },
  });
};
