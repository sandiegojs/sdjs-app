import React from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, TouchableHighlight, ScrollView } from 'react-native';
import { WebBrowser } from 'expo';
import Pin from '../../components/Pin';

class ShoppingContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      pin: {
        hoodie: {
          imagesource: require('../../assets/images/hoodie.png'),
          originalWidth: 480,
          originalHeight: 522
        },
        mug: {
          imagesource: require('../../assets/images/mug.png'),
          originalWidth: 480,
          originalHeight: 365
        },
        funcSunshine: {
          imagesource: require('../../assets/images/funcSunshine.png'),
          originalWidth: 470,
          originalHeight: 560
        },
        funcSunshine2: {
          imagesource: require('../../assets/images/funcSunshine2.png'),
          originalWidth: 470,
          originalHeight: 560
        },
        blueSdjs: {
          imagesource: require('../../assets/images/blueSdjs.png'),
          originalWidth: 470,
          originalHeight: 560
        },
        darkSdjs: {
          imagesource: require('../../assets/images/darkSdjs.png'),
          originalWidth: 470,
          originalHeight: 560
        }
      }
    };
  }

  handlePressButtonAsyncHoodie = async() => {
    let result = await WebBrowser.openBrowserAsync('https://teespring.com/sdjs-winter-2017#pid=212&cid=5832&sid=front');
    this.setState({ result });
  };

  handlePressButtonAsyncForMug = async() => {
    let result = await WebBrowser.openBrowserAsync('https://teespring.com/sdjs-winter-2017#pid=522&cid=101870&sid=front');
    this.setState({ result });
  };

  handlePressButtonAsyncForSun = async() => {
    let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/return-sunshine?tsmac=recently_viewed&tsmic=recently_viewed#pid=46&cid=2741&sid=front');
    this.setState({ result });
  };

  handlePressButtonAsyncForSun2 = async() => {
    let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/return-sunshine_copy_1?tsmac=recently_viewed&tsmic=recently_viewed#pid=46&cid=2741&sid=front');
    this.setState({ result });
  };

  handlePressButtonAsyncForBlueSdjs = async() => {
    let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/sandiego-js?tsmac=recently_viewed&tsmic=recently_viewed#pid=369&cid=6524&sid=front');
    this.setState({ result });
  };
  handlePressButtonAsyncForDarkSdjs = async() => {
    let result = await WebBrowser.openBrowserAsync('https://teespring.com/shop/sdjs-sun-on-black?tsmac=recently_viewed&tsmic=recently_viewed#pid=211&cid=5288&sid=front');
    this.setState({ result });
  };
  render() {
    return (
      <ScrollView style={ styles.container }>
        <View>
          <TouchableHighlight onPress={ () => this.handlePressButtonAsyncHoodie() }>
            <Pin pinsource={ this.state.pin.hoodie } columns={ this.state.columns } />
          </TouchableHighlight>
          <TouchableHighlight onPress={ () => this.handlePressButtonAsyncForMug() }>
            <Pin pinsource={ this.state.pin.mug } columns={ this.state.columns } />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight onPress={ () => this.handlePressButtonAsyncForSun() }>
            <Pin pinsource={ this.state.pin.funcSunshine } columns={ this.state.columns } />
          </TouchableHighlight>
          <TouchableHighlight onPress={ () => this.handlePressButtonAsyncForSun2() }>
            <Pin pinsource={ this.state.pin.funcSunshine2 } columns={ this.state.columns } />
          </TouchableHighlight>
        </View>
        <View>
          <TouchableHighlight onPress={ () => this.handlePressButtonAsyncForBlueSdjs() }>
            <Pin pinsource={ this.state.pin.blueSdjs } columns={ this.state.columns } />
          </TouchableHighlight>
          <TouchableHighlight onPress={ () => this.handlePressButtonAsyncForDarkSdjs() }>
            <Pin pinsource={ this.state.pin.darkSdjs } columns={ this.state.columns } />
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

// eslint-disable-next-line no-unused-vars
function mapStoreToProps(store) {
  return {};
}

export default connect(mapStoreToProps)(ShoppingContainer);
