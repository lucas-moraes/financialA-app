import React from 'react';
import { View, Modal, Text, TouchableOpacity } from 'react-native';
import { useStore } from '../../../store/useStore';
import { IconWarning } from '../IconWarning';
import { IconCheckCircle } from '../IconCheckCircle';
import { IconCancelCircle } from '../IconCancelCircle';
import { styles } from './styles';
import { DeleteData, GetMoviment } from '../../../services/useQuery';

export const ModalDeleteMoviment = () => {
  const { showModal, updateShowModal, selectedId } = useStore();
  const { refetch } = GetMoviment();

  const handleCheck = async () => {
    updateShowModal();
    await DeleteData(selectedId);
    refetch();
  };

  return (
    <>
      <Modal animationType="fade" transparent={true} visible={showModal}>
        <View style={styles.backView} />
        <View style={styles.frontView}>
          <View style={styles.modalView}>
            <IconWarning />
            <Text style={styles.textTitle}>Atenção</Text>
            <Text style={styles.textSubtitle}>Tem certeza que deseja apagar o movimento?</Text>
            <View style={styles.buttonsContainer}>
              <TouchableOpacity onPress={handleCheck}>
                <IconCheckCircle />
              </TouchableOpacity>
              <TouchableOpacity onPress={updateShowModal}>
                <IconCancelCircle />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};
