import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';

class Routes extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Router>
          <Stack key="root">
            <Scene key="login" component={Login} title="Login" initial />
            <Scene key="signup" component={Signup} title="Signup" />
          </Stack>
        </Router>
      </View>
    );
  }
}

export default Routes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});
