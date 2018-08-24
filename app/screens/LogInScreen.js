import React from 'react';
import LoginContainer from '../containers/LoginContainer/LoginContainer';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Log In',
    headerLeft: null
  };

  render() {
    return (
      <LoginContainer navigation={ this.props.navigation } />
    );
  }
};
