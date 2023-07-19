import React from 'react';
import { styles } from './styles';
import { props } from './interface';
import { MaskedTextInput } from 'react-native-mask-text';

export const InputMask = ({ onChange, value }: props) => {
  const handlePress = (text: string) => {
    return text.replace('R$ ', '');
  };

  return (
    <>
      <MaskedTextInput
        style={styles.text}
        type="currency"
        value={value !== 'undefined' ? `${String(Number(value) * 100)}` : '0.00'}
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
