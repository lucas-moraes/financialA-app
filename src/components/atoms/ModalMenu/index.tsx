/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import { ComponentStyles } from './styles';
import { useStore } from '../../../store/useStore';
import { IconClose } from '../IconClose';
import { ButtonMenu } from '../ButtonMenu';

export const ModalMenu = () => {
  const startPositonLeft = 400;
  const movementFromLeft = useRef(new Animated.Value(startPositonLeft)).current;
  const { toChoose, updateToChoose, updateToLaunchMovement, updateToAddCategory } = useStore();

  const styles = ComponentStyles();

  const handleOpen = () => {
    Animated.spring(movementFromLeft, {
      friction: 20,
      toValue: 0,
      useNativeDriver: false,
    }).start();
  };

  const handleClose = () => {
    Animated.spring(movementFromLeft, {
      friction: 150,
      toValue: 450,
      useNativeDriver: false,
    }).start();
    updateToChoose();
  };

  useEffect(() => {
    let isOpened = false;
    if (!isOpened && toChoose) {
      handleOpen();
    }

    () => {
      isOpened = true;
    };
  }, [toChoose]);

  return (
    <>
      <Animated.View style={[styles.backView, { left: movementFromLeft }]}>
        <View style={styles.frontView}>
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Text style={styles.textTitle}>Menu</Text>
              <TouchableOpacity
                onPress={() => {
                  handleClose();
                }}
              >
                <IconClose />
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <ButtonMenu onPress={updateToLaunchMovement}>Lançar no mês seguinte</ButtonMenu>
            </View>
            <View style={styles.body}>
              <ButtonMenu
                onPress={() => {
                  updateToAddCategory();
                  handleClose();
                }}
              >
                Adicionar categoria
              </ButtonMenu>
            </View>
          </View>
        </View>
      </Animated.View>
    </>
  );
};
