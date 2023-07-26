/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { Text } from 'react-native';
import { styles } from './styles';
import RNPickerSelect from 'react-native-picker-select';
import { useField } from 'formik';
import { SelectInputProps, TextTitleProps } from './interface';
import { IconExpand } from '../IconExpand';
import { THEME } from '../../../theme';

export const TextTitle = ({ children }: TextTitleProps) => {
  return <Text style={styles.input}>{children}</Text>;
};

export const SelectInput = ({ name, title, value, placeholder, onSelect, dataCategories }: SelectInputProps) => {
  const [meta] = useField(name);

  return (
    <>
      <RNPickerSelect
        placeholder={{
          label: placeholder,
        }}
        onValueChange={e => onSelect(e)}
        items={dataCategories}
        style={{
          inputAndroidContainer: {
            minWidth: 80,
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'relative',
            margin: 5,
            alignItems: 'center',
            padding: 5,
            height: 40,
            borderBottomWidth: 1,
            borderRadius: 5,
            borderBottomColor: THEME.COLORS.BACKGROUND_APP,
          },
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => {}}
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
        <IconExpand />
      </RNPickerSelect>
    </>
  );
};
