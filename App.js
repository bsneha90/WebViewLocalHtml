import React, { Component } from 'react';
import {
  WebView,
  View,
  StyleSheet,
  Platform
} from 'react-native';

import Widget from './external/widget/index.html'
const isAndroid= Platform.OS==='android'
const html =`<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="./widget/css/styles.css"/>
</head>

<body >
    <h1>Web view with local html</h1>
    <p id="para1">Some content</p>
    <p>Some more content</p>
</body>

</html>`
export default class App extends Component {

  render() {
    return (
        <WebView source={{html:html, baseUrl:isAndroid?'file:///android_asset/':'./external'}}/>
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
