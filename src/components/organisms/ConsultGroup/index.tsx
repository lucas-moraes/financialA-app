/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { SelectInput } from '../../atoms/SelectInput';
import { Formik } from 'formik';
import { Animated, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { initalValuesForConsultMovement } from '../../../constants/initialValuesFormik';
import { monthOptions } from '../../../constants/optionSelect';
import { GetDate } from '../../../services/useQuery';
import { ButtonPrimary } from '../../atoms/ButtonPrimary';
import { IconClose } from '../../atoms/IconClose';
import { useStore } from '../../../store/useStore';

type props = {
  handleFind: (arg1: number, arg2: number) => void;
};

export const FilterDate = ({ handleFind }: props) => {
  const { data } = GetDate();
  const { showFinder, updateShowFinder } = useStore();
  const startingHeight = 0;
  const expand = useRef(new Animated.Value(startingHeight)).current;

  const handleOpen = () => {
    Animated.spring(expand, {
      friction: 100,
      toValue: 70,
      useNativeDriver: false,
    }).start();
  };

  const handleClose = () => {
    Animated.spring(expand, {
      friction: 100,
      toValue: startingHeight,
      useNativeDriver: false,
    }).start();
  };

  const dateOptions = [] as unknown as [{ label: any; value: any }];
  data?.ano.forEach((item: any) => {
    if (typeof item.ano === 'number') {
      dateOptions.push({ label: String(item.ano), value: item.ano });
    }
  });

  useEffect(() => {
    let isOpened = false;
    if (!isOpened && showFinder) {
      handleOpen();
    }

    () => {
      isOpened = true;
    };
  }, [showFinder]);

  return (
    <Animated.View style={[styles.container, { height: expand, display: `${showFinder ? 'flex' : 'none'}` }]}>
      <Formik initialValues={initalValuesForConsultMovement} onSubmit={() => {}}>
        {({ setFieldValue, getFieldMeta }) => {
          return (
            <>
              <View style={styles.consultItems}>
                <SelectInput
                  name="month"
                  title="Mês"
                  placeholder="Selecionar um mês"
                  onSelect={value => setFieldValue('month', value)}
                  dataCategories={monthOptions}
                  value={getFieldMeta('month').value ?? ''}
                />
                <SelectInput
                  name="year"
                  title="Ano"
                  placeholder="Selecionar um ano"
                  onSelect={value => setFieldValue('year', value)}
                  dataCategories={dateOptions}
                  value={getFieldMeta('year').value ?? ''}
                />
                <ButtonPrimary
                  onPress={() => {
                    handleFind(Number(getFieldMeta('month').value), Number(getFieldMeta('year').value));
                  }}
                >
                  Buscar
                </ButtonPrimary>
              </View>
              <TouchableOpacity
                onPress={() => {
                  updateShowFinder();
                  handleClose();
                }}
              >
                <IconClose />
              </TouchableOpacity>
            </>
          );
        }}
      </Formik>
    </Animated.View>
  );
};
