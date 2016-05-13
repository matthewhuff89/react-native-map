import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  MapView
} from 'react-native';

var artists = require('../../artists.json');
console.log(artists);

module.exports = React.createClass({
  getInitialState: function() {
    return {
      pins: artists
    };
  },
  render: function(){
    return (
      <View style={styles.container}>
        <MapView
          annotations={this.state.pins}
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
