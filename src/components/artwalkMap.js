import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  MapView
} from 'react-native';

module.exports = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          >
        </MapView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  map: {
    flex: 3,
    marginTop: 30
  },
  textWrapper: {

  },
  text: {

  }
});
