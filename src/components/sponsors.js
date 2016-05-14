import React from 'react';
import {
  Linking,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image
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
  render: function(){
    return (
      <View style={styles.container}>
          <TouchableHighlight
            style={styles.menu}
            onPress={this.onMapPress}
            >
            <Text>"MAP"</Text>
          </TouchableHighlight>
        <TouchableHighlight
          style={styles.link1}
          onPress={this.linkToMARP}
          >
          <Image
            source={require('../images/MARP_ad.png')}
            />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.link2}
          onPress={this.linkToFAB}
          >
          <Image
            source={require('../images/fab_logo.png')}
            resizeMode={'contain'}
            />
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.link3}
          onPress={this.linkToBldg92}
          >
          <Image
            source={require('../images/bldg92_logo.png')}
            resizeMode={'contain'}
            />
        </TouchableHighlight>
      </View>

    )
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
    flex: 1,
    justifyContent: 'center'
  },
  menu: {
    flex: 4,
    justifyContent: 'center',
    backgroundColor: 'blue'
  },
  link1: {
    flex: 1,
    justifyContent: 'center',
  },
  link2: {
    flex: 1,
    justifyContent: 'center',
  },
  link3: {
    flex: 1,
    justifyContent: 'center',
  },
  link4: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  link5: {
    flex: 1,
    justifyContent: 'center'
  },
  link6: {
    flex: 1,
    justifyContent: 'center'
  },
  link7: {
    flex: 1,
    justifyContent: 'center'
  },
  link8: {
    flex: 1,
    justifyContent: 'center'
  },
  link9: {
    flex: 1,
    justifyContent: 'center'
  },
  link10: {
    flex: 1,
    justifyContent: 'center'
  },
  link11: {
    flex: 1,
    justifyContent: 'center'
  },
  link12: {
    flex: 1,
    justifyContent: 'center'
  },
})
