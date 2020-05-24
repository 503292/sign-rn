import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/image/logo.png')} />
      <Text style={styles.text}>Alatyr</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 50,
    height: 50,
  },
  text: {
    marginVertical: 15,
    fontSize: 20,
    color: '#fff',
  },
});
