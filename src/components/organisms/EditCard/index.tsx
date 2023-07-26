/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { Animated, Text, TouchableOpacity, View } from 'react-native';
import { ComponentStyles } from './styles';
import { Formik, FormikValues } from 'formik';
import { Datepicker } from '../../atoms/DatePicker';
import { SelectInput } from '../../atoms/SelectInput';
import { IconClose } from '../../atoms/IconClose';
import { GetCategories, GetMoviment, GetMovimentById, RegisterData, UpdateData } from '../../../services/useQuery';
import { initialValues } from '../../../constants/initialValuesFormik';
import { movimentOptions } from '../../../constants/optionSelect';
import { InputMask } from '../../atoms/InputMask';
import { InputText } from '../../atoms/Input';
import { ButtonPrimary } from '../../atoms/ButtonPrimary';
import { postMoviment } from '../../../interface/postMoviment';
import { useStore } from '../../../store/useStore';

export const EditCard = () => {
  const [show, setShow] = useState<'none' | 'flex'>('none');
  const styles = ComponentStyles();
  const startingHeight = 70;
  const expand = useRef(new Animated.Value(startingHeight)).current;
  const dataCategories = GetCategories();
  const { refetch } = GetMoviment();
  const { toEdit, updateToEdit, selectedId } = useStore();
  const [dataToEdit, setDataToEdit] = useState<typeof initialValues>(initialValues);

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
    if (toEdit) {
      updateToEdit();
    }
  };

  const submit = async (values: FormikValues) => {
    const dataMoviment = values as unknown as postMoviment;

    if (toEdit) {
      await UpdateData(dataMoviment, selectedId);
      handleClose();
      refetch();
    } else {
      await RegisterData(dataMoviment);
      handleClose();
      refetch();
    }
  };

  const getMovimentForEdit = async () => {
    const data = await GetMovimentById(selectedId);

    setDataToEdit(prevState => ({ ...prevState, date: `${data.dia}/${data.mes}/${data.ano}` }));
    setDataToEdit(prevState => ({ ...prevState, categories: data.categoria }));
    setDataToEdit(prevState => ({ ...prevState, moviment: data.tipo === 'entrada' ? 0 : 1 }));
    setDataToEdit(prevState => ({ ...prevState, value: data.valor }));
    setDataToEdit(prevState => ({ ...prevState, description: data.descricao }));

    handleOpen();
  };

  useEffect(() => {
    let isOpened = false;
    if (!isOpened && toEdit && selectedId > 0) {
      getMovimentForEdit();
    }

    () => {
      isOpened = true;
    };
  }, [toEdit]);

  return (
    <>
      <View style={[styles.containerBack, { display: show }]} />
      <Animated.View style={[styles.container, { height: expand }]}>
        <Formik
          initialValues={initialValues}
          onSubmit={values => {
            submit(values);
          }}
        >
          {({ setFieldValue, handleSubmit, getFieldMeta, resetForm }) => (
            <>
              <View style={styles.header}>
                <TouchableOpacity
                  onPress={() => {
                    setDataToEdit({});
                    handleOpen();
                  }}
                >
                  <Text style={styles.textTitle}>{toEdit ? 'Editar movimento' : 'Lançar movimento'}</Text>
                </TouchableOpacity>
                {show !== 'none' && (
                  <TouchableOpacity
                    onPress={() => {
                      handleClose();
                      resetForm();
                    }}
                  >
                    <IconClose />
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.body}>
                <View>
                  <Datepicker name="date" onConfirm={value => setFieldValue('date', value)} value={dataToEdit.date} />
                  <SelectInput
                    name="categories"
                    title="Categorias"
                    value={toEdit ? dataToEdit.categories : getFieldMeta('categories').value}
                    dataCategories={dataCategories}
                    placeholder="Selecione uma categoria"
                    onSelect={value => setFieldValue('categories', value)}
                  />
                  <SelectInput
                    name="moviment"
                    title="Movimento"
                    value={toEdit ? dataToEdit.moviment : getFieldMeta('moviment').value}
                    dataCategories={movimentOptions}
                    placeholder="Selecione o movimento"
                    onSelect={value => setFieldValue('moviment', value)}
                  />
                  <InputMask value={String(dataToEdit.value)} onChange={value => setFieldValue('value', value)} />
                  <InputText
                    placeholder="Descrição"
                    value={dataToEdit.description}
                    name="description"
                    onChangeText={value => setFieldValue('description', value)}
                  />
                </View>
              </View>
              <ButtonPrimary onPress={handleSubmit}>Salvar</ButtonPrimary>
            </>
          )}
        </Formik>
      </Animated.View>
    </>
  );
};
