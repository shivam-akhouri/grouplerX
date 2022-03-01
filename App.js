import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Loading from './pages/loading';
import Profile from './pages/Profile';
import Homepage from './pages/homepage';
import SignIn from './pages/signIn';
import Welcome from './pages/welcome';
import Meditation from './pages/meditation';
import WordCoach from "./pages/WordCoach";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Timeline from './pages/Timeline';
import { useContext } from 'react';
import SignInProvider from './providers/signinProvider';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SignInProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Timeline" screenOptions={{headerShown: false}}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Homepage" component={Homepage} />
          <Stack.Screen name="Timeline" component={Timeline} />
          <Stack.Screen name="WordCoach" component={WordCoach} />
        </Stack.Navigator>
      </NavigationContainer>
    </SignInProvider>
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
