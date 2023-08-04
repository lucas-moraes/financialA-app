import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { GetMovementGroup } from '../../../services/useQuery';
import { THEME } from '../../../theme';
import { FormatValue } from '../../../helpers/formatValue';
import { ComponentStyles } from './styles';
import { useStore } from '../../../store/useStore';

export const ResumeCard = () => {
  const { isLoading, data } = GetMovementGroup();
  const { mode, updateMode } = useStore();

  const styles = ComponentStyles(mode);

  const handleClick = () => {
    updateMode('year');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleClick}>
        <Text style={styles.textTitle}>Movementação no ano</Text>
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerDescription}>Descrição</Text>
        <Text style={styles.headerValue}>Valor</Text>
      </View>

      {isLoading ? (
        <ActivityIndicator style={styles.loader} size={70} color={THEME.COLORS.BACKGROUND_APP} />
      ) : (
        <>
          <FlatList
            data={data.categoriesByYear}
            renderItem={({ item }) => {
              return (
                <View style={styles.table}>
                  <Text style={styles.description}>{item.categoria}</Text>
                  <Text style={styles.value}>{FormatValue(item.valor)}</Text>
                </View>
              );
            }}
          />
          <View style={styles.footer}>
            <Text style={styles.sumary}>Total</Text>
            <Text style={styles.value}>{FormatValue(data.totalCategoriesByYear)}</Text>
          </View>
        </>
      )}
    </View>
  );
};
