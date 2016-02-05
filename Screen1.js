/**
 * Created by rettig on 1/12/16.
 */
'use strict';

import React, {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'

import Screen2 from './Screen2'

var Screen1 = React.createClass({

  render: function () {
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigator.push({
          title: 'Screen2',
          component: Screen2,
          })}>
        <Text style={styles.buttonText}>To Screen2</Text>
        </TouchableHighlight>
      </View>
    );
  },

});

var styles = StyleSheet.create({
  buttonContainer: {
    paddingTop: 70,
    padding: 10,
    flex: 1,
    alignItems: 'center',
  },
  button: {
    height: 36,
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
});

module.exports = Screen1;
