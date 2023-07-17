import React from 'react';
import { View } from 'react-native';
import { props } from './interface';
import { styles } from './styles';

export const Background = ({ children }: props) => {
  return <View style={styles.container}>{children}</View>;
};
