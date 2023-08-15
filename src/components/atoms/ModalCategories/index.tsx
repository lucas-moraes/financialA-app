/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useRef } from 'react';
import { View, Text, Animated, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { ComponentStyles } from './styles';
import { useStore } from '../../../store/useStore';
import { IconClose } from '../IconClose';
import { Formik, FormikValues } from 'formik';
import { initalValuesForCategories } from '../../../constants/initialValuesFormik';
import { InputText } from '../Input';
import { ButtonPrimary } from '../ButtonPrimary';
import { GetCategory, RegisterCategory } from '../../../services/useQuery';
import { THEME } from '../../../theme';

export const ModalCategories = () => {
  const startPositonLeft = 450;
  const categoriesFromRight = useRef(new Animated.Value(startPositonLeft)).current;
  const { toAddCategory, updateToAddCategory } = useStore();

  const styles = ComponentStyles();

  const { isLoading, isRefetching, data, refetch } = GetCategory();

  const handleOpen = () => {
    Animated.spring(categoriesFromRight, {
      friction: 20,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const handleClose = () => {
    Animated.spring(categoriesFromRight, {
      friction: 150,
      toValue: 450,
      useNativeDriver: false,
    }).start();
    updateToAddCategory();
  };

  useMemo(() => {
    let isOpened = false;
    if (!isOpened && toAddCategory) {
      handleOpen();
    }
  }, [toAddCategory]);

  const handleSubmit = async (values: FormikValues) => {
    await RegisterCategory(values.description);
    refetch();
  };

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
                  handleSubmit(values);
                }}
              >
                {({ setFieldValue, handleSubmit, getFieldMeta }) => (
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

              <View style={styles.containerFlatlist}>
                {isLoading || isRefetching ? (
                  <ActivityIndicator style={styles.loader} size={70} color={THEME.COLORS.BACKGROUND_APP} />
                ) : (
                  <FlatList
                    refreshing={isRefetching || isLoading}
                    data={data?.categoria}
                    keyExtractor={item => item.id}
                    persistentScrollbar={true}
                    renderItem={({ item }) => {
                      return (
                        <View>
                          <Text style={styles.textBody}>{item.descricao}</Text>
                        </View>
                      );
                    }}
                  />
                )}
              </View>
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
};
