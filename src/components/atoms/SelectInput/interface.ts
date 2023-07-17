export type TextTitleProps = {
  children: React.ReactNode;
};

export type SelectInputProps = {
  name: string;
  title: string;
  placeholder: string;
  onSelect: (value: any) => any;
  dataCategories: {
    value: any;
    label: any;
  }[];
};
