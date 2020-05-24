import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

class Form extends Component {
  state = {};
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          placeholder="Email"
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          placeholderTextColor="#fff"
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          underlineColorAndroid="rgba(0, 0, 0, 0)"
          secureTextEntry={true}
          placeholderTextColor="#fff"
        />

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Form;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: 300,
    backgroundColor: 'rgba(255,255,255, 0.3)',
    borderRadius: 25,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#fff',
    marginVertical: 10,
  },

  btn: {
    width: 300,
    backgroundColor: '#1c313a',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10,
  },
  btnText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
