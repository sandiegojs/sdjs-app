import React from 'react';
import { Platform } from 'react-native';
import PasswordContainer from '../containers/PasswordContainer/PasswordContainer';

export default class PasswordResetScreen extends React.Component {
  static navigationOptions = {
    title: 'Reset Password',
    ...Platform.select({
      ios: { headerLeft: null },
      android: { headerLeft: '' }
    })
  };

  render() {
    return <PasswordContainer navigation={ this.props.navigation } />;
  }
};
