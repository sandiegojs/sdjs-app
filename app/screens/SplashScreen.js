import React from 'react';
import SplashContainer from '../containers/SplashContainer/SplashContainer';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Splash',
    headerLeft: null,
    header: null
  };

  render() {
    return <SplashContainer navigation={ this.props.navigation } />;
  }
}
