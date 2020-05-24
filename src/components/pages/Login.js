import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import Logo from '../Logo';
import Form from '../Form';

import {Actions} from 'react-native-router-flux';

class Login extends Component {
  state = {};

  signup = () => {
    Actions.signup();
  };
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Login" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Dont have an account yet?</Text>
          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupBtn}>Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#607D8B',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    // marginVertical: 16,
    paddingVertical: 10,
    flexDirection: 'row',
  },
  signupText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  signupBtn: {
    fontSize: 16,
    paddingStart: 10,
    color: '#fff',
    fontWeight: '700',
  },
});
