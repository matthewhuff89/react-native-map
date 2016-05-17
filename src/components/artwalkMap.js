import React from 'react';
import {
  TouchableHighlight,
  View,
  Text,
  StyleSheet,
  MapView,
  Image
} from 'react-native';
var Geolocation = require('Geolocation');


var artists = require('../../artists.json');
artists = artists.map(function(artist){
  artist.title = artist.firstName + " " + artist.lastName;
  artist.subtitle = artist.address;
  return artist;
})

module.exports = React.createClass({
  getInitialState: function() {
    return {
      pins: artists,
      position: {
        coords: {
          latitude: 40.6968804,
          longitude: -73.9688704
        }
      },
      lastPosition: 'unknown'
    };
  },
  render: function(){
    return (
      <View style={styles.container}>
        <View style={styles.navigation}>
          <TouchableHighlight
            onPress={this.onLocationPress}
            >
            <Text
              style={styles.text}
              >
              Location
            </Text>
          </TouchableHighlight>
          <Image
            source={require('../images/sonya-stroll-logo.jpg')}
            style={styles.image}
            resizeMode='contain'
            />
          <TouchableHighlight
            onPress={this.onSponsorPress}
            >
            <Text
              style={styles.text}
              >
              Sponsors
            </Text>
          </TouchableHighlight>
        </View>

        <MapView
          annotations={this.state.pins}
          style={styles.map}
          region={this.state.position.coords}
          showsUserLocation={true}
          maxDelta={0.05}
          >
        </MapView>
      </View>
    );
  },
  onSponsorPress: function() {
    this.props.navigator.push({name: 'sponsors'})
  },
  onLocationPress: function() {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({position})
        navigator.geolocation.clearWatch(this.watchID);
      },
      (error) => alert(error.message),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
    )
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },
  map: {
    flex: 6
  },
  textWrapper: {

  },
  text: {
    color: 'blue',
    fontSize: 18
  },
  image: {
    marginLeft: 15,
    marginRight: 15,
    height: 75,
    width: 150
  }
});
