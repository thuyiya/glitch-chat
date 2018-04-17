import React, { Component } from 'react';
import {
  View,
  YellowBox,
} from 'react-native';

import HomeNavigator from './routes/HomeNavigator';

export default class Root extends Component {
  componentDidMount() {
    YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <HomeNavigator />
      </View>
    );
  }
}
