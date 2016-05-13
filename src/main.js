var React = require('react-native');
var {
  StyleSheet,
  Navigator
} = React;

var ROUTES = {
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
          initialRoute={}
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
