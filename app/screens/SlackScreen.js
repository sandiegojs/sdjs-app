import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SlackContainer from '../containers/SlackContainer/SlackContainer';

export default class SlackScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Slack',
    title: 'JOIN US',
    headerLeft: null,
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <SlackContainer />
    );
  }
};