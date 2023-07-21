import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { props } from './interface';
import { IconMenu } from '../IconMenu';
import { useStore } from '../../../store/useStore';

export const Navbar = ({ title }: props) => {
  const { updateToChoose } = useStore();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity
        onPress={() => {
          updateToChoose();
        }}
      >
        <IconMenu />
      </TouchableOpacity>
    </View>
  );
};
