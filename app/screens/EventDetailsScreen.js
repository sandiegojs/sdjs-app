import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import EventDetailsContainer from '../containers/EventDetailsContainer/EventDetailsContainer';

export default class EventDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Event Details',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <EventDetailsContainer />
    );
  }
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });