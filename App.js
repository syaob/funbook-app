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
import AppLoading from 'expo-app-loading';
import { requestBase } from './src/utils/constants';
import { UserListContext } from './src/context';


const Stack = createStackNavigator();

export default function App() {

  const [userLoggedIn, setIsUserLoggedIn] = useState(true);
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    fetchUserData();
  }, []);

  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  });


  async function fetchUserData(id) {
    const response = await fetch(requestBase + "/users.json");
    setUserList(await response.json());
  }


  if (!fontsLoaded) {
    return <Loading message="Loading fonts..." />
  }

  if (!userList) {
    //return <AppLoading />;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> 
          <Text>Loading users...</Text>
        </View>
      )
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
});
