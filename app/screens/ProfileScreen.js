import React from 'react';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarLabel: 'Profile',
    headerLeft: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ProfileContainer navigation={this.props.navigation} />
    );
  }
};
