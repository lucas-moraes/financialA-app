export type TextTitleProps = {
  children: React.ReactNode;
};

export type SelectInputProps = {
  name: string;
  title: string;
  placeholder: string;
  onSelect: (value: any) => any;
  value: string;
  dataCategories: {
    value: any;
    label: any;
  }[];
};
