import { FormikValues } from 'formik';

export const initialValues: FormikValues = {
  date: undefined,
  categories: undefined,
  moviment: undefined,
  value: undefined,
  description: undefined,
};

export const initalValuesForConsultMovement: FormikValues = {
  month: null,
  yield: null,
};
