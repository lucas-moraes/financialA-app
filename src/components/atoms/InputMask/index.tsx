import React from 'react';
import { styles } from './styles';
import { props } from './interface';
import { MaskedTextInput } from 'react-native-mask-text';

export const InputMask = ({ onChange }: props) => {
  const handlePress = (text: string) => {
    return text.replace('R$ ', '').replace('.', '').replace(',', '.');
  };

  return (
    <>
      <MaskedTextInput
        style={styles.text}
        type="currency"
        keyboardType="numeric"
        options={{
          prefix: 'R$ ',
          decimalSeparator: ',',
          groupSeparator: '.',
          precision: 2,
        }}
        onChangeText={text => {
          onChange(handlePress(text));
        }}
      />
    </>
  );
};
