/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, TouchableOpacity, FlatList } from 'react-native';
import { ComponentStyles } from './styles';
import { useStore } from '../../../store/useStore';
import { IconClose } from '../IconClose';
import { Formik } from 'formik';
import { initalValuesForCategories } from '../../../constants/initialValuesFormik';
import { InputText } from '../Input';
import { ButtonPrimary } from '../ButtonPrimary';
import { GetCategory } from '../../../services/useQuery';

export const ModalCategories = () => {
  // const startPositonLeft = 450;
  const startPositonLeft = 0;
  const categoriesFromRight = useRef(new Animated.Value(startPositonLeft)).current;
  const { toAddCategory, updateToAddCategory } = useStore();

  const styles = ComponentStyles();

  const { isLoading, data, refetch } = GetCategory();

  console.log(data);

  // const handleOpen = () => {
  //   Animated.spring(categoriesFromRight, {
  //     friction: 20,
  //     toValue: 0,
  //     useNativeDriver: false,
  //   }).start();
  // };

  const handleClose = () => {
    Animated.spring(categoriesFromRight, {
      friction: 150,
      toValue: 450,
      useNativeDriver: false,
    }).start();
    updateToAddCategory();
  };

  // useEffect(() => {
  //   let isOpened = false;
  //   if (!isOpened && toAddCategory) {
  //     handleOpen();
  //   }

  //   () => {
  //     isOpened = true;
  //   };
  // }, [toAddCategory]);

  return (
    <>
      <Animated.View style={[styles.backView, { right: categoriesFromRight }]}>
        <View style={styles.frontView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.textTitle}>Adicionar categoria</Text>
              <TouchableOpacity
                onPress={() => {
                  handleClose();
                }}
              >
                <IconClose />
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <Formik
                initialValues={initalValuesForCategories}
                onSubmit={values => {
                  submit(values);
                }}
              >
                {({ setFieldValue, handleSubmit, getFieldMeta, resetForm }) => (
                  <View style={styles.form}>
                    <InputText
                      placeholder="Descrição"
                      width={'70%'}
                      value={getFieldMeta('description').value ? String(getFieldMeta('description').value) : ''}
                      name="description"
                      onChangeText={value => setFieldValue('description', value)}
                    />
                    <ButtonPrimary onPress={handleSubmit}>Salvar</ButtonPrimary>
                  </View>
                )}
              </Formik>

              <FlatList
                data={data?.categorias}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                  return (
                    <View style={styles.table}>
                      <Text></Text>
                    </View>
                  );
                }}
              />
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
};
