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

var Screen3 = React.createClass({

  componentDidMount () {
    console.log("Screen3 mounted");
  },

  componentWillUnmount () {
    console.log("Screen3 will unmount");
    if (this.props.route.passProps.callback)
      this.props.route.passProps.callback();
  },

  render: function () {
    return (
      <View style={styles.buttonContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={this.props.navigator.pop}>
          <Text style={styles.buttonText}>Back To Screen2</Text>
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

module.exports = Screen3;
