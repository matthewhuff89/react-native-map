import React from 'react';
import {
  Linking,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  TouchableWithoutFeedback
} from 'react-native';

var marpLink = 'http://myrtleavenue.org/explore/dine-on-myrtle-avenue/';
var fabLink = 'http://faballiance.org/';
var bldg92Link = 'http://bldg92.org/';
var hadasLink = 'http://www.rabbisimcha.com/';
var claverLink = 'http://35claver.com/index.html';
var opticsLink = 'http://dc-optics.com/';
var greenLink = 'http://www.greeninbklyn.com/';
var pussycatLink = 'http://www.opcsalon.com/';
var coffeeLink = 'http://www.coffee11238.com/';
var tipsyLink = 'https://shoptipsy.com/';
var corkscrewLink = 'http://corkscrewbrooklyn.com/'


module.exports = React.createClass({
  getInitialState: function(){
    return {
      showBorder: true
    }
  },
  render: function(){
    return (
      <TouchableWithoutFeedback onPress={this._handlePress}>
      <View style={styles.container}>
        <View style={styles.navigation}>
          <Text style={styles.text}>Thanks to our sponsors!!</Text>
          <TouchableHighlight
            onPress={this.onMapPress}
            >
            <Text
              style={styles.mapButton}
            >
              MAP
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.link1}>
          <TouchableHighlight
            onPress={this.linkToMARP}
            >
            <Image
              style={{
                width: 400,
                height: 250
              }}
              source={require('../images/MARP_ad.png')}
              resizeMode='stretch'
              />
          </TouchableHighlight>
        </View>
        <View style={styles.link2}>
          <TouchableHighlight
            onPress={this.linkToFAB}
            >
            <Image
              style={styles.image}
              source={require('../images/FAB.png')}
              resizeMode='contain'
              />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.linkToBldg92}
            >
            <Image
              style={styles.image}
              source={require('../images/bldg92.png')}
              resizeMode='contain'
              />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.linkToHadas}
            >
            <Image
              style={styles.image}
              source={require('../images/Hadas.png')}
              resizeMode='contain'
              />
          </TouchableHighlight>
        </View>
        <View style={styles.link3}>
          <TouchableHighlight
            onPress={this.linkToClaver}
            >
            <Image
              style={styles.image}
              source={require('../images/claver.jpg')}
              resizeMode='contain'
              />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.linkToOptics}
            >
            <Image
              style={styles.image}
              source={require('../images/optics_logo.png')}
              resizeMode='contain'
              />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.linkToGreen}
            >
            <Image
              style={styles.image}
              source={require('../images/green_inBklyn.png')}
              resizeMode='contain'
              />
          </TouchableHighlight>
        </View>
        <View style={styles.link4}>
          <TouchableHighlight
            onPress={this.linkToPussycat}
            >
            <Image
              style={styles.image}
              source={require('../images/Logo.jpg')}
              resizeMode='contain'
              />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.linkToCoffee}
            >
            <Image
              style={styles.image}
              source={require('../images/coffee_11238.jpeg')}
              resizeMode='contain'
              />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.linkToTipsy}
            >
            <Image
              style={styles.image}
              source={require('../images/tipsy.jpg')}
              resizeMode='contain'
              />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={this.linkToCorkscrew}
            >
            <Image
              style={styles.image}
              source={require('../images/Corkscrew_wines.png')}
              resizeMode='contain'
              />
          </TouchableHighlight>
        </View>
      </View>
    </TouchableWithoutFeedback>

    )
  },
  _handlePress() {
    this.setState({showBorder: !this.state.showBorder});
  },
  onMapPress: function(){
    this.props.navigator.push({name: 'artwalkMap'})
  },
  linkToMARP: function() {
    Linking.canOpenURL(marpLink).then(supported => {
      if (supported) {
        Linking.openURL(marpLink);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  },
  linkToFAB: function(){
    Linking.canOpenURL(fabLink).then(supported => {
      if (supported) {
        Linking.openURL(fabLink);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  },
  linkToBldg92: function(){
    Linking.canOpenURL(bldg92Link).then(supported => {
      if (supported) {
        Linking.openURL(bldg92Link);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  },
  linkToHadas: function(){
    Linking.canOpenURL(hadasLink).then(supported => {
      if (supported) {
        Linking.openURL(hadasLink);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  },
  linkToClaver: function(){
    Linking.canOpenURL(claverLink).then(supported => {
      if (supported) {
        Linking.openURL(claverLink);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  },
  linkToOptics: function(){
    Linking.canOpenURL(opticsLink).then(supported => {
      if (supported) {
        Linking.openURL(opticsLink);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  },
  linkToGreen: function(){
    Linking.canOpenURL(greenLink).then(supported => {
      if (supported) {
        Linking.openURL(greenLink);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  },
  linkToPussycat: function(){
    Linking.canOpenURL(pussycatLink).then(supported => {
      if (supported) {
        Linking.openURL(pussycatLink);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  },
  linkToCoffee: function(){
    Linking.canOpenURL(coffeeLink).then(supported => {
      if (supported) {
        Linking.openURL(coffeeLink);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  },
  linkToTipsy: function(){
    Linking.canOpenURL(tipsyLink).then(supported => {
      if (supported) {
        Linking.openURL(tipsyLink);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  },
  linkToCorkscrew: function(){
    Linking.canOpenURL(corkscrewLink).then(supported => {
      if (supported) {
        Linking.openURL(corkscrewLink);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.url);
      }
    });
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center'
  },
  navigation: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black'
  },
  mapButton: {
    color: 'blue',
    fontSize: 16
  },
  image: {
    height: 100,
    width: 100
  },
  link1: {
    flex: 2,
    justifyContent: 'center',
    marginBottom: 20
  },
  link2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link3: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  link4: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  }
})
