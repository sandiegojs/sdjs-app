import React from 'react';
import LogoutContainer from '../containers/LogoutContainer/LogoutContainer';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Logout',
    headerLeft: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <LogoutContainer navigation={this.props.navigation} />
    );
  }
};
