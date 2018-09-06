import React from 'react';
import { View } from 'react-native';
import EventsContainer from '../containers/EventsContainer/EventsContainer';

export default class EventsScreen extends React.Component {
  static navigationOptions = {
    title: 'San Diego JS',
    tabBarLabel: 'Events',
    headerLeft: null
  };

  render() {
    return (
      <View>
        <EventsContainer navigation={ this.props.navigation } />
      </View>
    );
  }
}
