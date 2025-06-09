import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ onLogout, isAdmin }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <Text>Email: user@example.com</Text>
      {isAdmin && <Text>Role: Admin</Text>}
      <Button title="Log Out" onPress={onLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 12 },
});
