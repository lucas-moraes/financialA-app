import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { props } from './interface';

export const ButtonPrimary = ({ onPress }: props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress()}>
      <Text style={styles.text}>Salvar</Text>
    </TouchableOpacity>
  );
};
