/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { ComponentStyles } from './styles';
import { GetMovement, GetMovementFiltered } from '../../../services/useQuery';
import { THEME } from '../../../theme';
import { FormatValue } from '../../../helpers/formatValue';
import { useStore } from '../../../store/useStore';
import { IconDelete } from '../../atoms/IconDelete';
import { IconEdit } from '../../atoms/IconEdit';
import { IconCheckbox } from '../../atoms/IconCheckbox';
import { IconSearch } from '../../atoms/IconSearch';
import { FilterDate } from '../ConsultGroup';
import { FilterMovement } from '../../../interface/postMovement';
import { Movement } from '../../../interface/getMovement';

export const MovementCard = () => {
  const { showFinder, updateShowFinder } = useStore();
  const [movement, setMovement] = useState<Movement>();
  const { mode, updateMode, updateShowModal, updateSelectedId, updateToEdit } = useStore();
  const styles = ComponentStyles(mode);

  const handleClick = () => {
    updateMode('month');
  };

  const { isLoading, data } = GetMovement();

  async function ConsultMovement(period: FilterMovement) {
    const newMovement = await GetMovementFiltered(period);

    setMovement(newMovement);
  }

  useMemo(() => {
    if (!isLoading) {
      setMovement(data);
    }
  }, [isLoading]);

  return (
    <View style={styles.container}>
      <View style={styles.headerTitle}>
        <TouchableOpacity onPress={handleClick}>
          <Text style={styles.textTitle}>Lançamentos do Mês</Text>
        </TouchableOpacity>
        {!showFinder && (
          <TouchableOpacity
            onPress={() => {
              updateShowFinder();
            }}
          >
            <IconSearch />
          </TouchableOpacity>
        )}
      </View>

      <FilterDate
        handleFind={(month, year) => {
          ConsultMovement({ month: month, year: year });
        }}
      />

      <View style={styles.header}>
        <Text style={styles.headerDelete} />
        <Text style={styles.headerDate}>Data</Text>
        <Text style={styles.headerEdit} />
        <Text style={styles.headerCategory}>Categoria</Text>
        <Text style={styles.headerValue}>Valor</Text>
        <Text style={styles.headerStatus} />
      </View>

      {movement === undefined ? (
        <ActivityIndicator style={styles.loader} size={70} color={THEME.COLORS.BACKGROUND_APP} />
      ) : (
        <>
          <FlatList
            data={movement?.moviment}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <View style={styles.table}>
                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => {
                      updateShowModal();
                      updateSelectedId(item.id);
                    }}
                  >
                    <IconDelete />
                  </TouchableOpacity>
                  <Text style={styles.date}>
                    {item.dia}/{item.mes}/{item.ano}
                  </Text>
                  <TouchableOpacity
                    style={styles.buttons}
                    onPress={() => {
                      updateSelectedId(item.id);
                      updateToEdit();
                    }}
                  >
                    <IconEdit />
                  </TouchableOpacity>

                  <Text style={styles.category}>{item.categoria}</Text>
                  <Text style={styles.value}>{FormatValue(item.valor)}</Text>
                  <Text style={styles.status}>{item.descricao.search('PAGO') > -1 && <IconCheckbox />}</Text>
                </View>
              );
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.sumary}>Total</Text>
            <Text style={styles.value}>{FormatValue(movement?.total)}</Text>
          </View>
        </>
      )}
    </View>
  );
};
