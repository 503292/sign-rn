import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Form from '../Form';
import Logo from '../Logo';

class Singup extends Component {
  state = {};

  signin() {
    Actions.pop();
  }
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Signup" />
        <View style={styles.singupTextCont}>
          <Text style={styles.singupText}>Already have an accont?</Text>
          <TouchableOpacity onPress={this.signin}>
            <Text style={styles.singupBtn}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Singup;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#607D8B',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  singupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 16,
    flexDirection: 'row',

    paddingVertical: 10,
  },
  singupText: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
  },
  singupBtn: {
    fontSize: 16,
    paddingStart: 10,
    color: '#fff',
    fontWeight: '700',
  },
});
