import React from 'react';
import {
  TouchableHighlight,
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
      pins: artists,
      location: {
        latitude: 40.6968804,
        longitude: -73.9688704
      }
    };
  },
  render: function(){
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.navigation}
          onPress={this.onSponsorPress}
          >
          <Text>Sponsors</Text>
        </TouchableHighlight>
        <MapView
          annotations={this.state.pins}
          style={styles.map}
          region={this.state.location}
          showsUserLocation={true}
          maxDelta={0.05}
          >
        </MapView>
      </View>
    );
  },
  onSponsorPress: function() {
    this.props.navigator.push({name: 'sponsors'})
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  navigation: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  map: {
    flex: 5
  },
  textWrapper: {

  },
  text: {

  }
});
