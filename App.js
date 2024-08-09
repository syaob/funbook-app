import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/surfaces/Home';
import Login from './src/surfaces/Login';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
import Loading from './src/components/Loading';
import { ConversationsNavigation } from './src/surfaces/ConversationsNavigation';


const Stack = createStackNavigator();

export default function App() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <Loading message="Loading fonts..." />
  }

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator>
        {!userLoggedIn ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <>
          <Stack.Screen name="Home" component={Home} options={ { headerShown: false } }/>
          <Stack.Screen name="ConversationsNav" component={ConversationsNavigation} options={ { headerShown: false } }/>
          </>
          
        )}
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
