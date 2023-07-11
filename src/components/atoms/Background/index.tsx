import React from 'react';
import { StyleSheet, View } from 'react-native';
import { THEME } from '../../../theme';

type props = {
  children: React.ReactNode;
};

export const Background = ({ children }: props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: THEME.COLORS.BACKGROUND_APP,
  },
});
