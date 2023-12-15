import { StyleSheet, Text, View, FlatList } from 'react-native';
import React from 'react';

export default function CoursesScreen() {
  const courses = [
    { name: 'Angular', id: 1 },
    { name: 'React Js', id: 2 },
    { name: 'C#', id: 3 },
    { name: 'C Programlama', id: 4 },
    { name: 'Bootstrap', id: 5 },
  ];
  return (
    <FlatList
      data={courses}
      // horizontal // yatay hizalama
      // showsHorizontalScrollIndicator={false} // scroll gorunmesin
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <Text style={styles.content}>{item.name}</Text>;
      }}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    fontSize: 20,
    backgroundColor: 'green',
    marginVertical: 10,
    padding: 20,
  },
});
