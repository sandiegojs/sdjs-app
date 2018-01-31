import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PollContainer from '../containers/PollContainer/PollContainer';

export default class PollScreen extends React.Component {
  static navigationOptions = {
    title: 'Poll',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <PollContainer />
    );
  }
};