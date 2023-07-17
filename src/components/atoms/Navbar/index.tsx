import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { props } from './interface';

export const Navbar = ({ title }: props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};
