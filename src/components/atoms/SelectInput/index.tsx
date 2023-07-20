import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import RNPickerSelect from 'react-native-picker-select';
import { useField } from 'formik';
import { SelectInputProps, TextTitleProps } from './interface';

export const TextTitle = ({ children }: TextTitleProps) => {
  return <Text style={styles.input}>{children}</Text>;
};

export const SelectInput = ({ name, title, value, placeholder, onSelect, dataCategories }: SelectInputProps) => {
  const [meta] = useField(name);

  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={{
          label: placeholder,
        }}
        onValueChange={e => onSelect(e)}
        items={dataCategories}
      >
        <TextTitle>
          {value
            ? dataCategories.map((item: { value: number; label: string }) => {
                if (meta.value) {
                  if (item.value === meta.value) {
                    return item.label;
                  }
                } else {
                  if (item.value === Number(value)) {
                    return item.label;
                  }
                }
              })
            : title}
        </TextTitle>
      </RNPickerSelect>
    </View>
  );
};
