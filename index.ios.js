/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  Navigator,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Screen1 from './Screen1'
//import Screen2 from './Screen2'
//import Screen3 from './Screen3'

function _renderScene(route, navigator) {
  //console.log(route, navigator);
  //console.log("calling _renderScene");
  return React.createElement(route.component, { navigator, route });
}

class CallbackPopBugExample extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{name: 'Screen1', component: Screen1}}
        renderScene={_renderScene}/>
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

AppRegistry.registerComponent('CallbackPopBugExample', () => CallbackPopBugExample);
