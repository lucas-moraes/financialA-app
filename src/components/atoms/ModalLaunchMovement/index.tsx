/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Animated, TouchableOpacity, FlatList } from 'react-native';
import { ComponentStyles } from './styles';
import { useStore } from '../../../store/useStore';
import { IconClose } from '../IconClose';
import { GetCategories, GetMovement, RegisterData } from '../../../services/useQuery';
import { IconDelete } from '../IconDelete';
import { FormatValue } from '../../../helpers/formatValue';
import { ButtonPrimary } from '../ButtonPrimary';
import { TMovement } from './interface';
import { PostMovement } from '../../../interface/postMovement';
import { CategoriesTranslator } from '../../../helpers/categoriesTranslator';
import { MovementType } from '../../../constants/optionSelect';

export const ModalLaunchMovement = () => {
  const [refresh, startRefresh] = useState(false);
  const [movement, setMovement] = useState<TMovement[]>([]);
  const { isLoading, data } = GetMovement();
  const dataCategories = GetCategories();
  const startPositonRight = 450;
  const movementFromRight = useRef(new Animated.Value(startPositonRight)).current;
  const { toLaunchMovement, updateToLaunchMovement } = useStore();

  const styles = ComponentStyles();

  const handleSendMoviment = async () => {
    for (const item of movement) {
      if (item.mes) {
        item.mes = item.mes + 1;
      }

      const category = await CategoriesTranslator(item.categoria, dataCategories);
      const date = new Date(`${item.ano}-${item.mes}-${item.dia}`);
      const type = MovementType.indexOf(item.tipo, 0);

      const dataToPost: PostMovement = {
        date: date,
        categories: category,
        description: '',
        movement: String(type),
        value: item.valor,
      };

      await RegisterData(dataToPost);
    }
  };

  const newMoviment = data?.moviment;

  useEffect(() => {
    let isStarted = false;
    if (!isLoading && !isStarted) {
      setMovement(newMoviment);
    }

    () => {
      isStarted = true;
    };
  }, [isLoading]);

  const handleOpen = () => {
    Animated.spring(movementFromRight, {
      friction: 20,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const handleClose = () => {
    Animated.spring(movementFromRight, {
      friction: 150,
      toValue: 450,
      useNativeDriver: false,
    }).start();
    updateToLaunchMovement();
  };

  useEffect(() => {
    let isOpened = false;
    if (!isOpened && toLaunchMovement) {
      handleOpen();
      setMovement(newMoviment);
    }

    () => {
      isOpened = true;
    };
  }, [toLaunchMovement]);

  return (
    <>
      <Animated.View style={[styles.backView, { right: movementFromRight }]}>
        <View style={styles.frontView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.textTitle}>Lançar no mês seguinte</Text>
              <TouchableOpacity
                onPress={() => {
                  handleClose();
                }}
              >
                <IconClose />
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <View style={styles.header}>
                <Text style={styles.headerDelete} />
                <Text style={styles.headerDate}>Data</Text>
                <Text style={styles.headerCategory}>Categoria</Text>
                <Text style={styles.headerValue}>Valor</Text>
              </View>
              <FlatList
                style={styles.flatList}
                extraData={refresh}
                data={movement}
                // keyExtractor={item => item.id}
                renderItem={({ item, index }) => {
                  return (
                    <View style={styles.table}>
                      <TouchableOpacity
                        style={styles.buttons}
                        onPress={() => {
                          movement.splice(index, 1);
                          startRefresh(!refresh);
                        }}
                      >
                        <IconDelete />
                      </TouchableOpacity>
                      <Text style={styles.date}>
                        {item.dia}/{item.mes + 1}/{item.ano}
                      </Text>

                      <Text style={styles.category}>{item.categoria}</Text>
                      <Text style={styles.value}>{FormatValue(String(item.valor))}</Text>
                    </View>
                  );
                }}
              />
              <ButtonPrimary onPress={handleSendMoviment}>Lançar</ButtonPrimary>
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
};
