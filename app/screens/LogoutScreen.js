import React from 'react';
import LogoutContainer from '../containers/LogoutContainer/LogoutContainer';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Logout',
    headerLeft: null
  };

  render() {
    return (
      <LogoutContainer navigation={ this.props.navigation } />
    );
  }
};
