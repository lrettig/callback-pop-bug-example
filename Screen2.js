/**
 * Created by rettig on 11/9/15.
 */
'use strict';

import React, {
  ActivityIndicatorIOS,
  ListView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native'

import Screen3 from './Screen3'

var Screen2 = React.createClass({

  componentDidMount () {
    console.log("Screen2 mounted");
  },

  componentWillUnmount () {
    console.log("Screen2 will unmount");
  },

  render: function () {
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => this.props.navigator.push({
            title: 'Screen3',
            component: Screen3,
            passProps: {
              callback: () => {
                console.log("Control returned to Screen2");
                console.log("Popping back to Screen1");
                this.props.navigator.pop();
              },
            }
          })}>
          <Text style={styles.buttonText}>To Screen3</Text>
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

module.exports = Screen2;
