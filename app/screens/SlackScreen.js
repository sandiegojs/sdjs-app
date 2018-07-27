import React from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import SlackContainer from '../containers/SlackContainer/SlackContainer';

export default class SlackScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Slack',
    headerTitle: 'Join us',
    headerLeft: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <SlackContainer />
    );
  }
};