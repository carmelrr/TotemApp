import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const events = [
  { id: '1', name: 'Competition', time: '2024-06-01 10:00' },
  { id: '2', name: 'Intro to Bouldering', time: '2024-06-05 18:00' },
];

export default function EventsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.time}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  item: { marginBottom: 12 },
  name: { fontWeight: 'bold' },
});
