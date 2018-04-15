import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Home from './screens/Home';

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
