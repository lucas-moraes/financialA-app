import React, { useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { styles } from './styles';
import { useField } from 'formik';
import { TextInput, TouchableOpacity, View } from 'react-native';
import { props } from './interface';
import { THEME } from '../../../theme';

export const Datepicker = ({ name, value, onConfirm }: props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [meta] = useField(name);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsOpen(true)}>
        <TextInput
          style={styles.input}
          editable={false}
          placeholder="Data"
          placeholderTextColor={THEME.COLORS.TEXT_DARK}
          value={meta.value ? meta.value.toLocaleDateString('pt-BR') : value}
        />
      </TouchableOpacity>

      <DatePicker
        modal
        open={isOpen}
        mode="date"
        date={new Date()}
        locale="pt"
        onConfirm={e => {
          setIsOpen(false);
          onConfirm(e);
        }}
        onCancel={() => {
          setIsOpen(false);
        }}
      />
    </View>
  );
};
