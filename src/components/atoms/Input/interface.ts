import { ChangeEvent } from 'react';

export type props = {
  name: string;
  onChangeText: (e: string | ChangeEvent<any>) => void;
  placeholder: string;
};
