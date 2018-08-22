import React from 'react';
import SplashContainer from '../containers/SplashContainer/SplashContainer';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Splash',
    headerLeft: null,
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SplashContainer navigation={this.props.navigation} />
    );
  }
};
