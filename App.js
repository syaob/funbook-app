import React, { useState, useEffect } from 'react';
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
import { requestBase } from './src/utils/constants';
import { UserListContext } from './src/context';
import * as SplashScreen from 'expo-splash-screen';

// Prevent the splash screen from auto-hiding before everything is loaded
SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {

  const [userLoggedIn, setIsUserLoggedIn] = useState(true);
  const [userList, setUserList] = useState(null);

 

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  async function fetchUserData() {
    try {
      const response = await fetch(requestBase + "/users.json");
      const data = await response.json();
      setUserList(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }


  // Show a custom loading screen while fonts and user data are loading
  if (!fontsLoaded || !userList) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
 

  return (
    <SafeAreaProvider>
      <UserListContext.Provider value={{ userList }}>
      <NavigationContainer>
        <Stack.Navigator>
          {!userLoggedIn ? (
            <Stack.Screen name="Login" component={Login} />
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              <Stack.Screen name="ConversationsNav" component={ConversationsNavigation} options={{ headerShown: false }} />
            </>

          )}
        </Stack.Navigator>
      </NavigationContainer>
      </UserListContext.Provider>
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
