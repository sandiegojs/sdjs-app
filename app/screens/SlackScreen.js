import React from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import SlackContainer from '../containers/SlackContainer/SlackContainer';
import LogOutContainer from '../containers/LogoutContainer/LogoutContainer';

export default class SlackScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Slack',
    headerTitle: 'Join us',
    headerLeft: null,
    headerRight: <LogOutContainer />,
    
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SlackContainer />
    );
  }
};