/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, StatusBar, View, Text} from 'react-native';

// import Login from './components/pages/Login';
// import Signup from './components/pages/Signup';
import Routes from './components/Routes';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#00BCD4" barStyle="light-content" />
      <Routes />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#607D8B',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
