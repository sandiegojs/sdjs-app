import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
<<<<<<< HEAD
//import ProfileContainer from '../containers/ProfileContainer/ProfileContainer';
=======
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'
>>>>>>> Implemented Github Oauth

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ProfileContainer />
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