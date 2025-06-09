import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function RoutesMapScreen({ isAdmin }) {
  const [routes, setRoutes] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const mapRef = useRef(null);

  const handleLongPress = (event) => {
    if (!editMode) return;
    const coordinate = event.nativeEvent.coordinate;
    setRoutes((current) => [
      ...current,
      { id: Date.now().toString(), coordinate },
    ]);
  };

  const handleRemoveRoute = (id) => {
    setRoutes((current) => current.filter((r) => r.id !== id));
  };

  return (
    <View style={styles.container}>
      {isAdmin && (
        <Button
          title={editMode ? 'Disable Edit Mode' : 'Enable Edit Mode'}
          onPress={() => setEditMode((e) => !e)}
        />
      )}
      <MapView
        ref={mapRef}
        style={styles.map}
        onLongPress={handleLongPress}
      >
        {routes.map((route) => (
          <Marker
            key={route.id}
            coordinate={route.coordinate}
            onPress={() => {
              if (editMode) handleRemoveRoute(route.id);
            }}
          />
        ))}
      </MapView>
      <FlatList
        style={styles.list}
        data={routes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{`Route ${item.id}`}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  list: {
    height: 120,
    padding: 8,
  },
});
