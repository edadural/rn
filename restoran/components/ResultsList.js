import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ResultDetail from './ResultDetail';
import { useNavigation } from '@react-navigation/native';

export default function ResultsList({ title, results }) {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <Text style={styles.title}>{title}</Text>

      <FlatList
        horizontal      // yatay hizalama
        showsHorizontalScrollIndicator={false}    // scrool gorunmesin
        data={results}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
              <ResultDetail result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5,
  }
})