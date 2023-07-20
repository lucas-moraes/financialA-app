import React from 'react';
import { ActivityIndicator, Animated, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { ComponentStyles } from './styles';
import { GetMoviment } from '../../../services/useQuery';
import { THEME } from '../../../theme';
import { FormatValue } from '../../../helpers/formatValue';
import { useStore } from '../../../store/useStore';
import { IconDelete } from '../../atoms/IconDelete';
import { IconEdit } from '../../atoms/IconEdit';
import { IconCheckbox } from '../../atoms/IconCheckbox';

export const MovimentCard = () => {
  const { isRefetching, isLoading, data } = GetMoviment();
  const { mode, updateMode, updateShowModal, updateSelectedId, updateToEdit } = useStore();
  const styles = ComponentStyles(mode);

  const handleClick = () => {
    updateMode('month');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick}>
        <Text style={styles.textTitle}>Lançamentos do Mês</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerDelete} />
        <Text style={styles.headerDate}>Data</Text>
        <Text style={styles.headerEdit} />
        <Text style={styles.headerCategory}>Categoria</Text>
        <Text style={styles.headerValue}>Valor</Text>
        <Text style={styles.headerStatus}>*</Text>
      </View>

      {isLoading || isRefetching ? (
        <ActivityIndicator style={styles.loader} size={70} color={THEME.COLORS.BACKGROUND_APP} />
      ) : (
        <>
          <FlatList
            data={data.moviment}
            keyExtractor={item => item.id}
            renderItem={({ item }) => {
              return (
                <Animated.View style={styles.table}>
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
                </Animated.View>
              );
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.sumary}>Total</Text>
            <Text style={styles.value}>{FormatValue(data.total)}</Text>
          </View>
        </>
      )}
    </View>
  );
};
