import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Loading from './pages/loading';
import Profile from './pages/Profile';
import Homepage from './pages/homepage';
import SignIn from './pages/signIn';
import Welcome from './pages/welcome';
import Chats from './pages/chats';
import Meditation from './pages/meditation';

export default function App() {
  return (
    <Welcome />
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
