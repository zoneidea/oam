import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import AppBackground from './components/AppBackground';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppBackground>
        <Text>App.js</Text>
      </AppBackground>
    </SafeAreaView>
  );
};

export default App;
