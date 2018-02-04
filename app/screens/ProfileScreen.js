import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ProfileContainer from '../containers/ProfileContainer/ProfileContainer'

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile',
    tabBarLabel: 'Profile',
    headerLeft: null
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ProfileContainer navigation={this.props.navigation}/>
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