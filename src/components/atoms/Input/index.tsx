import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';
import { props } from './interface';
import { useField } from 'formik';
import { THEME } from '../../../theme';

export const InputText = ({ name, value, onChangeText, placeholder }: props) => {
  const [meta] = useField(name);
  return (
    <>
      <TextInput
        style={styles.text}
        placeholderTextColor={THEME.COLORS.TEXT_DARK}
        onChangeText={onChangeText}
        value={value ?? meta.value}
        placeholder={placeholder}
      />
    </>
  );
};
