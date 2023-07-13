import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { ComponentStyles } from './styles';
import { GetMoviment } from '../../services/useQuery';
import { THEME } from '../../theme';
import { FormatValue } from '../../helpers/formatValue';
import { useStore } from '../../context/useStore';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const MovimentCard = () => {
  const { isLoading, data } = GetMoviment();
  const { mode, updateMode } = useStore();

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

      {isLoading ? (
        <ActivityIndicator style={styles.loader} size={70} color={THEME.COLORS.BACKGROUND_APP} />
      ) : (
        <>
          <FlatList
            data={data.moviment}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.table}>
                <TouchableOpacity style={styles.buttons}>
                  <Icon name="delete" size={20} color={THEME.COLORS.BACKGROUND_APP} />
                </TouchableOpacity>
                <Text style={styles.date}>
                  {item.dia}/{item.mes}/{item.ano}
                </Text>
                <TouchableOpacity style={styles.buttons}>
                  <Icon name="edit" size={20} color={THEME.COLORS.BACKGROUND_APP} />
                </TouchableOpacity>

                <Text style={styles.category}>{item.categoria}</Text>
                <Text style={styles.value}>{FormatValue(item.valor)}</Text>
                <Text style={styles.status}>
                  {item.descricao.length < 3 ? '' : <Icon name="check-box" size={20} color="#00b256" />}
                </Text>
              </View>
            )}
          />
          <View style={styles.footer}>
            <Text>Total</Text>
            <Text style={styles.value}>{FormatValue(data.total)}</Text>
          </View>
        </>
      )}
    </View>
  );
};
