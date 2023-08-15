import { ChangeEvent } from 'react';
import { DimensionValue } from 'react-native';

export type props = {
  name: string;
  value: string;
  width?: DimensionValue;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  placeholder: string;
};
