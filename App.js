import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/surfaces/Login';
import Feed from './src/surfaces/Feed';

import AddPost from './src/surfaces/AddPost';
import Favorites from './src/surfaces/Favorites';
import Profile from './src/surfaces/Profile';
import Conversations from './src/surfaces/Conversations';
import { colors } from './src/styles/colors';
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppLoading from 'expo-app-loading'; 
import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold
} from "@expo-google-fonts/poppins";
import Loading from './src/components/Loading';
import { ConversationsNavigation } from './src/surfaces/ConversationsNavigation';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ConversationsBase = () => <View style={{ flex: 1 }} />;

function Home() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === "Feed") {
          iconName = focused ? "home" : "home-outline";
        }else if (route.name === "Conversations") {
          iconName = focused ? "chatbox" : "chatbox-outline";
        } else if (route.name === "AddPost") {
          iconName = focused ? "chatbox" : "chatbox-outline";
        } else if (route.name === "Favorites") {
          iconName = focused ? "heart" : "heart-outline";
        } else if (route.name === "Profile") {
          iconName = focused ? "person-circle" : "person-circle-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: colors.accentStroke,
      tabBarInactiveTintColor: colors.black,
      headerTransparent: true,
        headerTitleAlign: "left",
        headerStyle: {
          height: 160,
        },
        headerTitleStyle: {
          textAlign: "left",
          fontWeight: "bold",
          fontFamily: "Poppins_700Bold",
          fontSize: 24,
        },
    })}>
    
      <Tab.Screen name="Feed" component={Feed} />
      {/* <Tab.Screen name="Conversations" component={Conversations} /> */}
      <Tab.Screen
        name='ConversationsMain'
          component={ConversationsBase} // just a dummy             component which will never be called
        options={{
          tabBarIcon: ({ size }) => (
              <Ionicons name='chatbox-outline' color='#000000'                size={size} />
          ),
        }}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            e.preventDefault();
            navigation.navigate("ConversationsNav");
          },
        })}
      />
      <Tab.Screen name="AddPost" component={AddPost} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

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
