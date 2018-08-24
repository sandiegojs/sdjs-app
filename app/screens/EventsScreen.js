import React from 'react';
import { StyleSheet, View } from 'react-native';
import EventsContainer from '../containers/EventsContainer/EventsContainer';
import RootNavigator from '../tabNavigation/MainTabNavigator';

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
        <View style={ styles.container }>
          { /* {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          {Platform.OS === 'android' && <View style={styles.statusBarUnderlay} />} */ }
          <RootNavigator navigation={ this.props.navigation } />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
