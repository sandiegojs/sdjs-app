import React from 'react';
import { Platform } from 'react-native';
import SignupContainer from '../containers/SignupContainer/SignupContainer';

export default class SignupScreen extends React.Component {
  static navigationOptions = {
    title: 'Sign Up',
    ...Platform.select({
      ios: {
        headerLeft: null
      },
      android: {
        headerLeft: ''
      }
    })
  };

  render() {
    return <SignupContainer navigation={ this.props.navigation } />;
  }
}
