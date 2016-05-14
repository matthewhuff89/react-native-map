import React from 'react';
import {
  Navigator,
  StyleSheet
} from 'react-native';

var ArtWalkMap = require('./components/artwalkMap');
var Sponsors = require('./components/sponsors');

var ROUTES = {
  artwalkMap: ArtWalkMap,
  sponsors: Sponsors
};


module.exports = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name];
    return <Component route={route} navigator={navigator}/>;
  },
  render: function() {
    return (
        <Navigator
          style={styles.container}
          initialRoute={{name: 'artwalkMap'}}
          renderScene={this.renderScene}
          configureScene={() => { return Navigator.SceneConfigs.FloatFromRight; }}
         />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
