import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './screens/LoginScreen';
import RoutesMapScreen from './screens/RoutesMapScreen';
import EventsScreen from './screens/EventsScreen';
import ProfileScreen from './screens/ProfileScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (email, password) => {
    // placeholder authentication logic
    setAuthenticated(true);
    if (email === 'admin@example.com') {
      setIsAdmin(true);
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);
    setIsAdmin(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!authenticated ? (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {() => <LoginScreen onLogin={handleLogin} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Routes">
              {() => <RoutesMapScreen isAdmin={isAdmin} />}
            </Stack.Screen>
            <Stack.Screen name="Events" component={EventsScreen} />
            <Stack.Screen name="Profile">
              {() => (
                <ProfileScreen
                  onLogout={handleLogout}
                  isAdmin={isAdmin}
                />
              )}
            </Stack.Screen>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
