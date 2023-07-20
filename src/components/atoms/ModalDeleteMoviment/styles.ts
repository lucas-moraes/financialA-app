import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
  backView: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0, 0.5)',
    position: 'absolute',
  },
  frontView: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: THEME.COLORS.CARD.BACKGROUND_THIRTY,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
  },
  textTitle: {
    fontSize: THEME.TEXT.LG,
    marginBottom: 20,
    color: THEME.COLORS.TEXT_DARK,
  },
  textSubtitle: {
    fontSize: THEME.TEXT.MD,
    marginBottom: 40,
    color: THEME.COLORS.TEXT_DARK,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
  },
});
