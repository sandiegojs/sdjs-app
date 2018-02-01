import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
<<<<<<< HEAD
      <ProfileContainer navigation={this.props.navigation}/>
=======
      <Text>Profile</Text>
>>>>>>> added styles to buttons
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});