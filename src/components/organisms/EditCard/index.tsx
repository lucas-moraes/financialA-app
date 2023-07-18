import React, { useRef, useState } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { ComponentStyles } from './styles';
import { Formik, FormikValues } from 'formik';
import { Datepicker } from '../../atoms/DatePicker';
import { SelectInput } from '../../atoms/SelectInput';
import { IconClose } from '../../atoms/IconClose';
import { GetCategories, GetMoviment, RegisterData } from '../../../services/useQuery';
import { initialValues } from '../../../constants/initialValuesFormik';
import { movimentOptions } from '../../../constants/optionSelect';
import { InputMask } from '../../atoms/InputMask';
import { InputText } from '../../atoms/Input';
import { ButtonPrimary } from '../../atoms/ButtonPrimary';
import { postMoviment } from '../../../interface/postMoviment';

export const EditCard = () => {
  const [show, setShow] = useState<'none' | 'flex'>('none');
  const styles = ComponentStyles();
  const startingHeight = 70;
  const expand = useRef(new Animated.Value(startingHeight)).current;
  const dataCategories = GetCategories();
  const { refetch } = GetMoviment();

  const handleOpen = () => {
    setShow('flex');
    Animated.spring(expand, {
      friction: 100,
      toValue: 450,
      useNativeDriver: false,
    }).start();
  };

  const handleClose = () => {
    Animated.spring(expand, {
      friction: 100,
      toValue: startingHeight,
      useNativeDriver: false,
    }).start();
    setShow('none');
  };

  const submit = async (values: FormikValues) => {
    const dataMoviment = values as unknown as postMoviment;
    await RegisterData(dataMoviment);
    handleClose();
    refetch();
  };

  return (
    <>
      <View style={[styles.containerBack, { display: show }]} />
      <Animated.View style={[styles.container, { height: expand }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleOpen}>
            <Text style={styles.textTitle}>Lançar movimento</Text>
          </TouchableOpacity>
          {show !== 'none' && (
            <TouchableOpacity onPress={handleClose}>
              <IconClose />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.body}>
          <Formik
            initialValues={initialValues}
            onSubmit={values => {
              submit(values);
            }}
          >
            {({ setFieldValue, handleSubmit }) => (
              <View>
                <Datepicker name="date" onConfirm={value => setFieldValue('date', value)} />
                <SelectInput
                  name="categories"
                  title="Categorias"
                  dataCategories={dataCategories}
                  placeholder="Selecione uma categoria"
                  onSelect={value => setFieldValue('categories', value)}
                />
                <SelectInput
                  name="moviment"
                  title="Movimento"
                  dataCategories={movimentOptions}
                  placeholder="Selecione o movimento"
                  onSelect={value => setFieldValue('moviment', value)}
                />
                <InputMask onChange={value => setFieldValue('value', value)} />
                <InputText
                  placeholder="Descrição"
                  name="description"
                  onChangeText={value => setFieldValue('description', value)}
                />
                <ButtonPrimary onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </Animated.View>
    </>
  );
};
