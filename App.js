import React, { Component } from 'react';
import {
  WebView,
  View,
  StyleSheet,
  Platform
} from 'react-native';
const isAndroid= Platform.OS==='android'

export default class App extends Component {
  render() {
    return (
      <WebView source={{uri:isAndroid?'file:///android_asset/widget/index.html':'./widget/index.html'}}/>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
